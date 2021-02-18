import React from 'react'
import { Header, SearchBar } from '../components'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <div className="app-container">
                    <Header/>
                    <SearchBar/>
                </div>
            </div>
        )
    }
}

export default Home
