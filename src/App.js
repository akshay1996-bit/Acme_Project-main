import styles from "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Page404 from "./Components/Page404/Page404";
import AboutPage from "./Components/AboutPage/AboutPage";
import ShopPage from "./Components/ShopPage/ShopPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import DonationPage from "./Components/DonationPage/DonationPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import HomePage from "./Components/HomePage/HomePage";
import ProductsCard from "./Components/Utilities/ProductsCards/ProductCard/ProductCard";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [showCart, setShowCart] = useState(false);
  const showTheCart = () => {
    console.log("ski");
    setShowCart((prevState) => !prevState);
  };

  return (
    <Router>
      <div className={styles.App}>
        <Header showCart={showTheCart} showTheCart={showTheCart} />
       
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/acme-project-webflow" component={HomePage}/>
       
          <Route exact path="/about"component={AboutPage}/>
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/donations" component={DonationPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/category/gift-cards" component={ProductPage} />
          <Route exact path="/category/tents" component={ProductPage} />
          <Route exact path="/category/accessories" component={ProductPage} />
          <Route exact path="/category/packs" component={ProductPage} />
          <Route exact path="/product/white-tent" component={ProductPage} />
          <Route exact path="/product/gift-card" component={ProductPage} />
          <Route exact path="/product/tin-coffee-tumbler" component={ProductPage} />
          <Route exact path="/product/blue-canvas-pack" component={ProductPage} />
          <Route exact path="/product/green-canvas-pack" component={ProductPage} />
          


          

          
          <Route path="*" component={Page404} />

        </Switch>

        
        <Footer />
      </div>
      </Router>
    
  );
}

export default App;
