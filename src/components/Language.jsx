import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"

const Language = ({name, img, options}) => {
  // console.log(lang);
  const [showImage, setShowImage] = useState(true)
  return (
    <Container style={{background:"peachpuff"}} className="p-4 rounded-2" onClick={() => setShowDesc(!showDesc)}>

      {showImage && (
        <Container>
        <Image src={img} width="70%"></Image>
        <h3 className="display-6">{name}</h3>
      </Container>
      )}    

      {!showImage && (
       <ol>
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
