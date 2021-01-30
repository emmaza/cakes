import Header from './Header/Header';
import './App.css';
import Products from './Products/Products';
import Cover from './Cover/Cover';
import Order from './Order/Order';
import About from './About/About';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <Products />
      <Order />
      <About id='About' />
      <Footer />
    </div>
  );
}

export default App;
