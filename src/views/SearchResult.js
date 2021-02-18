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
            success: null,
            likesList: null
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props
        let likes = JSON.parse(localStorage.getItem('likes'))

        if (likes === null) {
            const emptyArray = []

            likes = emptyArray
            localStorage.setItem('likes', JSON.stringify(emptyArray))
        }
        this.setState({likesList: likes})
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

    handleLike() {
        let list = this.state.likesList

        if (Array.isArray(list) && list.includes(this.state.title)) {
            const valueIndex = list.indexOf(this.state.title)
            
            list.splice(valueIndex, 1)
            localStorage.setItem('likes', JSON.stringify(list))
            this.setState({likesList: list})
        } else {
            list.push(this.state.title)
            localStorage.setItem('likes', JSON.stringify(list))
            this.setState({likesList: list})
        }
    }

    render() {
        let likeButtonClassName

        if (Array.isArray(this.state.likesList) && this.state.likesList.includes(this.state.title)) {
            likeButtonClassName = 'already-liked-button'
        } else {
            likeButtonClassName = 'like-button'
        }
        return (
            <div className="App">
                <div className="app-container">
                    <Header title={this.state.title}/>
                    {this.state.success === true ?
                        <div>
                            <div className="divider">
                                Results
                                <hr/>
                            </div>
                            <div>
                                <h2>{this.state.title}</h2>
                            </div>
                            <div>
                                <h3>{this.state.description}</h3>
                            </div>
                            <div>
                                {this.state.extract}
                            </div>
                            <button className={likeButtonClassName} onClick={this.handleLike.bind(this)}>
                                {likeButtonClassName === 'like-button' ? <div>LIKE</div> : <div>UNLIKE</div>}
                            </button>
                        </div>
                        : 
                        <div>
                            <div className="divider">
                                <hr/>
                            </div>
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
