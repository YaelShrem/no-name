import Header from "./header/Header";
// import {Container, Row, Col} from 'react-bootstrap'
// import HomePage from './homePage/HomePage';
import Login2 from "./login/Login2";
//import BusinessDetails from "./businessDetails/BusinessDetails";
import Footer from "./homePage/footer/Footer";
//import TopBusinesses from "./homePage/topBusinesses/TopBusinesses";
//import SearchSection from "./homePage/searchSection/SearchSection";
import Recommendations from "./recommendations/Recommendations";
import OrderDetails from "./shoppingCart/orderDetails/OrderDetails";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Recommendations /> */}
      {/* <Login2 /> */}
      <BusinessDetails />
      {/* <OrderDetails /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;