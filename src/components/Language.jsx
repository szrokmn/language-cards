import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"

const Language = ({name, img, options}) => {
  // console.log(lang);
  const [showImage, setShowImage] = useState(true)
  return (
    <Container style={{background:"peachpuff"}} type="button" className="lang-card p-4 rounded-2 h-100" onClick={() => setShowDesc(!showDesc)}>

      {showImage && (
        <Container>
        <Image className="lang-logo" src={img} width="70%"></Image>
        <h3 className="display-6">{name}</h3>
      </Container>
      )}    

      {!showImage && (
       <ol className="h-100 d-flex flex-column justify-content-center">
       {options.map((item) => {
         return 
         <li className="h6 text-start">{item}</li>
       })}
     </ol>
      )}          

    </Container>
  )
}

export default Language
