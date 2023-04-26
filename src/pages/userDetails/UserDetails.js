import { useParams, useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import React, { useState } from 'react';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Parent from '../parent/Parent';

export const UserContext = React.createContext();

function UserDetails (props) {
    const params = useParams();
    const [searchParams] = useSearchParams()
    const navigate = useNavigate();
    const location = useLocation();


    const [user, setUser] = useState({userName: "Sharath H S", role: 'Software Developer'});
    
    const redirectToHome = () => {
        // OTHER FUNCTIONALITY
        navigate('/home');
    } 
    
    return(
        <>
        {/* ABC  componet */}
        <UserContext.Provider value={user}>
            <Header/>
            <h1>In User Details Component : {params.userId} </h1>
            <button onClick={redirectToHome} >Redirect to Home</button>
            <Parent />
            <Footer/>
        </UserContext.Provider>
        </>
    );
}

export default UserDetails;