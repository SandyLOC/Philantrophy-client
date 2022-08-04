import "../App.css";
import Typography from "@mui/material/Typography";
import Carousel from "../components/Carousel/Carousel";


function HomePage(props) {


  return (
    <div className="App">
      <Typography variant="h1" mt={2} mb={1}>PHILANTROPHY</Typography>
      <Carousel/>
    
    </div>
  );
}

export default HomePage;