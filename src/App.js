import Header from './Header/Header';
import './App.css';
import Products from './Products/Products';
import Cover from './Cover/Cover';
import Order from './Order/Order';
import About from './About/About';
import Footer from './Footer/Footer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Cover />
            <Products />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
