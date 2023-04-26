import { useEffect, useState } from "react";
import { getUsers } from '../../service/users'
import TextField from '@mui/material/TextField';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'


function User () {
    const [users, setUsers] = useState([]);
    const [userNumber,setUserNumber]=useState('');
    const getUserData=(e)=>
    {
        setUserNumber(e.target.value);
    }

    const getUsersList = async () => {
        const users = await getUsers(userNumber);
        setUsers(users);
    }

    useEffect(() => {
        getUsersList();
    },[userNumber])

    return(
        <>
            <Header />
            <h1>In User Component</h1>
            <div><TextField type="number" onChange={getUserData} id="outlined-basic" label="Enter a number" variant="outlined" /></div>
            
            {
                users.map((user) => 
                    <>
                        <img src={user.profile} alt="profile" />
                        <h1>{user.name}</h1>
                        <div>
                            email : {user.email}
                            <br />
                            phone : {user.phone}
                        </div>
                    </>
                )
            }
            <Footer/>
        </>
    );
}

export default User;