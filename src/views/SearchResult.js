import React from 'react'
import PropTypes from 'prop-types'
import API from '../api'
import { Header } from '../components'

class SearchResult extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: null,
            description: null,
            extract: null,
            success: null
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props

        if (params.query !== undefined) {
            API.get(`/page/summary/${params.query}`)
                .then(res => res.data)
                .then(json => {
                    console.log(json)
                    this.setState({title: json.titles.display, description: json.description, extract: json.extract, success: true})
                })
                .catch(error => {
                    console.log(error)
                    this.setState({success: false})
                })
        }
    }

    render() {
        return (
            <div className="App">
                <div className="app-container">
                    <Header title={this.state.title}/>
                    {this.state.success === true ?
                        <div>
                            <div>
                                <h2>{this.state.title}</h2>
                            </div>
                            <div>
                                <h3>{this.state.description}</h3>
                            </div>
                            <div>
                                {this.state.extract}
                            </div>
                            <button className="like-button">LIKE</button>
                        </div>
                        : 
                        <div>
                            <div>
                                <h2>Not found</h2>
                            </div>
                            <div>
                                This page doesn&apos;t exist.
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

SearchResult.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            query: PropTypes.string
        })
    })
}

export default SearchResult
