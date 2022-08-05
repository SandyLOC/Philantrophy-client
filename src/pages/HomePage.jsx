import "../App.css";
import Typography from "@mui/material/Typography";
import Carousel from "../components/Carousel/Carousel";
import Container from '@mui/material/Container';

function HomePage(props) {


  return (
    <div className="Home">
    <Container maxWidth="100vh">
    <Typography variant="h1" mt={8} mb={6}>PHILANTROPHY</Typography>
    <div className="homeImg">
    
    </div>
    <Carousel/>
    </Container>
    </div>
  );
}

export default HomePage;