import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            redirect: null
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        let query = event.target.query.value

        query = query.replace(/ /g,'_')
        window.location.href = '/searchResults/' + encodeURIComponent(query)
    }

    render() {
        return (
            <div>
                <header>
                    <h1 className="title">Wiki search</h1>
                    <a className="liked-link" href="/liked">LIKED</a>
                </header>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-container">
                        <label htmlFor="page-title">Page title</label>
                        <input type="text" name="query" id="page-title" placeholder="Try &quot;Paris&quot; or &quot;Marseille&quot;" defaultValue={this.props.title}/>
                    </div>
                    <button className="searchButton">SEARCH</button>
                </form>
            </div>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
