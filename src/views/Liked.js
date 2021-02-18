import React from 'react'
import PropTypes from 'prop-types'

class Liked extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const likedElements = JSON.parse(localStorage.getItem('likes'))
        let likes = null

        if (Array.isArray(likedElements) && likedElements.length) {
            likes = <div>
                {
                    likedElements.map((item, i) => {return <div key={i}>- {item}</div>})
                }
            </div>
        } else {
            likes = <div>
                You didn&apos;t liked anything
            </div>
        }
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
                    <div className="liked-elements">
                        {likes}
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
