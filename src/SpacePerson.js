import React from 'react'

function SpacePerson(props) {
    return (
        <div>
            <h1>{props.personObj.name}</h1>
            <h3>{props.personObj.craft}</h3>
        </div>
    )
}

export default SpacePerson