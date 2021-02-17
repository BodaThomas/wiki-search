import React from 'react'
import { Header } from '../components'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <div className="app-container">
                    <Header/>
                </div>
            </div>
        )
    }
}

export default Home
