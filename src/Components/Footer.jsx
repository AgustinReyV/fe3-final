import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
const Navigate = useNavigate()

  return (
    <footer>
      
      
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
        
    </footer>
  )
}

export default Footer
