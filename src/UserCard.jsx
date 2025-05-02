import React from 'react'

const UserCard = ({user}) => {
    // console.log(user)
    const {name, username, age, gender, role, key} = user

    return (
        <ul style ={{border: '1px solid red', width : '20vw'}}>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Gender: {gender}</li>
       </ul>
    )
}

export default UserCard