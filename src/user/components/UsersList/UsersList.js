import React from 'react';

import UsersItem from '../UsersItem/UsersItem';
import './UsersList.css';

const UsersList = (props) => {
        if (props.items.length === 0) {
            return <h1> No Item Found </h1>
        }
        return(  
            <ul>
                {
                    props.items.map((user) => {
                        return(
                            <UsersItem 
                            key = {user.id}
                            id = {user.id}
                            name = {user.name}
                            image = {user.img}
                            placeCount = {user.count}
                            />
                        );
                    })
                }
            </ul>
        );
}

export default UsersList;