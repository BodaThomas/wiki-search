import React from 'react'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit(event) {
        event.preventDefault()
        let query = event.target.query.value

        query = query.replace(/ /g,'_')
        window.location.href = '/searchResults/' + encodeURIComponent(query)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="input-container">
                    <label htmlFor="page-title">Page title</label>
                    <input type="text" name="query" id="page-title" placeholder="Try &quot;Paris&quot; or &quot;Marseille&quot;" defaultValue={this.props.title}/>
                </div>
                <button className="searchButton">SEARCH</button>
            </form>
        )
    }
}


SearchBar.propTypes = {
    title: PropTypes.string
}

export default SearchBar
