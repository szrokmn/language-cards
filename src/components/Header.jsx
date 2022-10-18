
import Container from "react-bootstrap/Container"
import Image from 'react-bootstrap/Image'
import reatLogo from "../assets/"

const Header = () => {
  return (
    <Container>      
      <Image fluid src={reatLogo} width="250px"></Image>
    </Container>
  )
}

export default Header