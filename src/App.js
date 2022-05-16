import logo from './logo.svg';
import './App.css';
import Header from  './components/header';
import ProductList from  './components/productList';
function App() {
  return (
    <div>
      <div class="container py-5">
          <Header />
          <ProductList />
      </div>     
    </div>
  );
}

export default App;
