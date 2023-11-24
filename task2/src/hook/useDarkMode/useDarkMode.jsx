import { useState } from "react"

const useDarkMode =()=> {
const [isLight,setIsLight]=useState(false)

    function changeThemeeMode(){
        
        document.body.classList.toggle("dark")
        setIsLight(!isLight)
    }
    return {isLight,changeThemeeMode}
}
export default useDarkMode