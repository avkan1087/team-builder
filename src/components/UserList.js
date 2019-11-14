import React from 'react';
import styled from 'styled-components';

const UserList = (props) =>{
    return (
        <List>
            {props.users.map(user => (
                <User>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.role}</p>
                </User>
            ))}
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
`

const User = styled.div`
    background-color: #bbbbbb;
    padding: 20px;
    text-align: left;
    border: 1px solid #eee;
`


export default UserList;