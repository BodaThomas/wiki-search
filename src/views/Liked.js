import React from 'react'
import PropTypes from 'prop-types'

class Liked extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <div className="app-container">
                    <header>
                        <h1 className="title">Wiki search</h1>
                        <a className="back-link" href="#" onClick={this.props.history.goBack}>BACK</a>
                    </header>
                    <div className="divider">
                        Liked
                        <hr/>
                    </div>
                </div>
            </div>
        )
    }
}

Liked.propTypes = {
    history: PropTypes.shape({
        goBack: PropTypes.func
    })
}

export default Liked
