import React from 'react'
import Logo from '../assets/logo.png'
import * as c from './styled'

const Header = () => {
  return (
    <c.Tudo>
      <img src={Logo} alt="" width={30}/>
      <nav>
        <c.Ul>
          <li><a href="#">Mac</a></li>  
          <li><a href="#">ipad</a></li>
          <li><a href="#">iphone</a></li>
          <li><a href="#">Watch</a></li>
          <li><a href="#">AirPods</a></li>
          <li><a href="#">Acessórios</a></li>
          <li><a href="#">Suporte</a></li>
        </c.Ul>
      </nav>
    </c.Tudo>
  )
}

export default Header
