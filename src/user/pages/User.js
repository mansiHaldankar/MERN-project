import  React  from 'react';

import UsersList from '../components/UsersList/UsersList';

const User = () => {
    const USER = [
        {
            id : "u1",
            name : "Mansi",
            img : "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
            count : "3"
        }
    ]
    return <UsersList items = {USER}/>
}

export default User;