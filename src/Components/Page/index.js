import {useState, useEffect} from "react";
import Navbar from "../Navbar/index"
import Main from "../Main/index"


function Page() {

   const [cityName, setCityName] = useState({})

   
    return(
        <div>
        
            <Navbar addCity={setCityName} />
            <Main cityInner={cityName} />
        
        </div>
        
    )
    
}

export default Page;