import React from "react"; 
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Signup from "./pages/SignupPages";
import Logins from "./pages/LoginsPages";
import Pricing from "./pages/PricingPages"; 
import Feature from "./pages/FeaturesPages"; 
import Resource from "./pages/ResourcesPages"; 

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />  
        <Route path="/features" exact component={Feature} />
        <Route path="/resources" exact component={Resource} />
        <Route path="/logins" exact component={Logins} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/pricing" exact component={Pricing} />
      </Switch>
    </Router>
  );
}

export default App;
