import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../../shared/components/UIElements/Avatar/Avatar';
import Card from '../../../shared/components/UIElements/Card/Card';
import './UsersItem.css';

const UsersItem = (props) => {
    return(
        <li className = "user-item">
            <div className = "user-item__content">
                <Card>
                    <Link to = '/${ props.id }/places'>
                        <div className = "user-item__image">
                            <Avatar image = {props.image} alt = {props.name}/>
                            {/* <img src= {props.image} alt = {props.name}/> */}
                        </div>
                        <div className = "user-item__info">
                            <h2> { props.name } </h2>
                            <h3> { props.placeCount } { props.placeCount === 1 ? 'Place' : "Places"} </h3>
                        </div>
                    </Link>
                </Card>
            </div>
        </li>
    )
}

export default UsersItem;