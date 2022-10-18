import Language from './Language'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import data from "../helpers/data"

const Card = () => {
  return (
    <Container calassName="rounded-4 mt-4" style={{background:"#f48b29"}}>
      <h1>Language</h1>
      <Row>
        {data.map((lang) => {
          return(
          <Col>
             <Language key={index} {...lang}/>  
          </Col>
          )
        })}
      </Row>      
    </Container>
  )
}

export default Card
