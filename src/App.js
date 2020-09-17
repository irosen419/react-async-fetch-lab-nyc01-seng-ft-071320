import React from 'react'

class App extends React.Component {

    state = {
        content: []
    }

    render() {
        return <h1>{this.state.conent}</h1>
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(data => this.setState({ content: data }))
    }
}

export default App