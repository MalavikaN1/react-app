import { useEffect, useState } from "react";
import Children from '../../components/children/Children';


function Parent () {
    return(
        <div> 
            Parent Component
            <Children />      
        </div>
    );
}

export default Parent;