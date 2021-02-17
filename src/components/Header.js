import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <header>
                    <h1 className="title">Wiki search</h1>
                    <a className="liked-link" href="/liked">LIKED</a>
                </header>
                <form>
                    <div className="input-container">
                        <label htmlFor="page-title">Page title</label>
                        <input id="page-title" placeholder="Try &quot;Paris&quot; or &quot;Marseille&quot;" defaultValue={this.props.title}/>
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
