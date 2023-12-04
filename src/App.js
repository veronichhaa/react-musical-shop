
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import ProductService from "./API/ProductService";
function App() {

    console.log(ProductService.getAllProducts())
    console.log(ProductService.getProductById(1))

  return (
    <div className="App">
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;
