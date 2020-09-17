import React from 'react'
import SpacePerson from './SpacePerson'

class App extends React.Component {

    state = {
        content: []
    }

    spacefolk = () => {
        if (this.state.content.people) {
            return this.state.content.people.map(person => <SpacePerson personObj={person} />)
        }
    }

    render() {
        return (
            <div>
                {this.spacefolk()}
            </div>)
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(data => this.setState({ content: data }))
    }
}

export default App