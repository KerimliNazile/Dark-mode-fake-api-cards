import useDarkMode from '../../hook/useDarkMode/useDarkMode'
import Card from '../Card'
import './index.scss'

const DarkMode = () => {
  const {isLight, changeThemeeMode} = useDarkMode()



  return (
    <div>
      <i className={`fa-solid ${isLight ? 'fa-sun' : 'fa-moon'} `} onClick={changeThemeeMode}></i>
      
      <Card/>
      </div>

      
    

  )
}

export default DarkMode