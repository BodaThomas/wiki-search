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
            </div>
        )
    }
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
