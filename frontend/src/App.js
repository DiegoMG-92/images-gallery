import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import ImageCard from "./Components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";
import Welcome from "./Components/Welcome";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.unsplash.com/photos/random?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setImages([{ ...data, title:word}, ...images]);
        
      })
      .catch((error) => {
        console.log(error);
      });
      setWord("");
  };

  const handleDeleteImage = (id) => { 
      setImages(images.filter((image) => image.id !== id));
   };

  return (
    <div>
      <Header title="Images Gallery 2" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className = "mt-4">
        {images.length ?
        <Row xs={1} md={3} lg={3}>
        {images.map((image, index) => (
          <Col key={index} className="pb-3">
            <ImageCard image={image} deleteImage={handleDeleteImage} />
          </Col>
          ))}	
        </Row> :<Welcome />}
      </Container>
    </div>
  );
};
export default App;
