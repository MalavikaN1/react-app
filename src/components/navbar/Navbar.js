import { Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './Navbar.css'

function Navbar () {

    return(
        <nav class="navbar">
            <Button style={{backgroundColor:"white",margin:"1%"}} className='btn' variant="contained"><Link to={"/home"} style={{ textDecoration: 'none' }}>Home</Link></Button>
            <Button style={{backgroundColor:"white",margin:"1%"}} className='btn' variant="contained"><Link to={"/user"} style={{ textDecoration: 'none' }}>User</Link></Button>
            <Button style={{backgroundColor:"white",margin:"1%"}} className='btn' variant="contained"><Link to={"/signin"} style={{ textDecoration: 'none' }}>Sign In</Link></Button>
        
            
        </nav>
    );
}

export default Navbar;