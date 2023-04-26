import { UserContext } from "../../pages/userDetails/UserDetails";
import { useContext } from 'react'
function Children (props) {

    // const { name, onNameChange } = props;

    const user = useContext(UserContext)
    console.log(user);

    return(
        <div> 
            Child Component : {user.userName }
            {/* <input type={"text"} value={name} onChange={(e) => onNameChange(e.target.value)} /> */}
        </div>
    );
}

export default Children;