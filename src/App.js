import Header from './Header';
import './App.css';
import Products from './Products';
import Cover from './Cover';
import Order from './Order';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <Products />
      <Order />
      <About />
      <Footer />
    </div>
  );
}

export default App;
