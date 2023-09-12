import Main from "./MainPage";
import Services from "./ServicesPage";
import Trips from "./TripsPage";

export default function App() {
  return (
    <>
      <Main/>
      <Services/>
      <Trips />
      <Footer />
    </>
  );
}

function Footer(){
  return(
    <footer>
      <div className="column">
        <p>Restaurant Reservations</p>
        <p>Flight Finder</p>
        <p>Hotels</p>
        <p>Destinations</p>
        <p>Hotels</p>
        <p>Cities</p>
        <p>Airports</p>
      </div>
      <div className="column">
        <p>Reviews</p>
        <p>Discover</p>
        <p>Seasonal holidays deals</p>
      </div>
      <div className="column">
        <p>Copy rights: 2023 @travelling agency.</p>
        <div className="social">
          <img src="img/face.svg" alt="facebook"/>
          <img src="img/insta.svg" alt="insta"/>
          <img src="img/twitter.svg" alt="twitter"/>
        </div>
      </div>
    </footer>
  );
}