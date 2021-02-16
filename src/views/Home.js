import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: null
        }
    }

    render() {
        return(
            <div className="App">
                <h1>Wiki search</h1>
                <form>
                    <div>
                        <input onChange={e => {this.setState({input: e.target.value})}}/>
                    </div>
                    <button>SEARCH</button>
                </form>
                <div>
                    {this.state.input}
                </div>
            </div>
        )
    }
}

export default Home
