import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './SigninForm.css'
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';


function SigninForm () {
const navigate=useNavigate();
const [UserName,getUserName]=useState('');
    const submitForm=()=>{
       // window.location.href=`/user/${UserName}`
       if(UserName!='')
        navigate(`/user/${UserName}`);
        else
        navigate('/NotFound');
    }

    return (
        <>
        <div class="signin">
            <h1>SIGN IN</h1>
            <div class="name"><TextField onChange={(e)=>getUserName(e.target.value)}  id="outlined-basic" label="Enter name" variant="outlined" /></div>
            <div class="pwd"><TextField  id="outlined-basic" label="Enter password" variant="outlined" /></div>
            <Button variant="contained" onClick={submitForm}>Submit</Button>
        </div>

        </>
    )
}

export default SigninForm;