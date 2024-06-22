import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCardContext } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {dispatch} = useCardContext()
  const [dark, setDark] = useState(true)
  const {state} = useCardContext()

const changeTheme = ()=>{
  setDark(!dark)
  var theme ='light';
  if(dark){
    theme ='dark';
  }else{
    theme = 'light';
  }
  dispatch({type: 'CHANGE-THEME', payload: theme})
}


  return (
    <nav className={state.theme}>
      
        <Link to="/"><h4>Home</h4></Link>
        <Link to="/Contact"><h4>Contact</h4></Link>
        <Link to="/Favs"><h4>Favs</h4></Link>
        <button onClick={changeTheme} className='ThemeButton'>change theme</button>
      
      
      
      
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
      
    </nav>
  )
}

export default Navbar