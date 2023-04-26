import axios from 'axios';

export const getUsers = async (x) => {
        const users = await axios.get(`${process.env.REACT_APP_API_HOSTNAME}?page=1&results=${x}`);
        const usersList = [];

        for(let user of users.data.results) {
            usersList.push({
                name: `${user.name.first} ${user.name.first}`, 
                email: user.email,
                phone: user.phone,
                profile: user.picture.thumbnail
            })
        }
        return usersList;
    }


