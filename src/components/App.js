import Header from "./header/Header";
// import {Container, Row, Col} from 'react-bootstrap'
// import HomePage from './homePage/HomePage';
import Login2 from "./login/Login2";
import BusinessDetails from "./businessDetails/BusinessDetails";
import Footer from "./homePage/footer/Footer";
import TopBusinesses from "./homePage/topBusinesses/TopBusinesses";
import SearchSection from "./homePage/searchSection/SearchSection";
import Recommendations from "./recommendations/Recommendations";
import OrderDetails from "./shoppingCart/orderDetails/OrderDetails";
import ProductCatalog from "./shoppingCart/productCatalog/ProductCatalog";
// import Login2 from "./login/Login2";
// import BusinessDetails from "./businessDetails/BusinessDetails";
// import Footer from "./homePage/footer/Footer";
//import TopBusinesses from "./homePage/topBusinesses/TopBusinesses";
//import SearchSection from "./homePage/searchSection/SearchSection";
//import Recommendations from "./recommendations/Recommendations";
// import OrderDetails from "./shoppingCart/orderDetails/OrderDetails";
import Pricing from './homePage/pricing/Pricing';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Header />
      <Pricing/>
      {/* <Recommendations /> */}
      {/* <Login2 /> */}
      {/* <BusinessDetails /> */}
      {/* <OrderDetails /> */}
      <ProductCatalog />
      {/* <Footer /> */}
    </div>
  );
}

export default App;