import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './componentes/home';
import Products from './componentes/products';
import Footer from './componentes/footer';
import Contact from './componentes/Contact';
import Nav from './componentes/nav';
import Goback from './componentes/goback';
import Students from './componentes/students';
import Student from './componentes/student';
import Product1 from './componentes/product1';
import Product2 from './componentes/product2';
import Product3 from './componentes/product3';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/products' element={<Products/>}>

        <Route path='product/1' element={<Product1/>}/>
        <Route path='product/2' element={<Product2/>}/>
        <Route path='product/3' element={<Product3/>}/>

        </Route>

        <Route path='/contact' element={<Contact/>} />
        <Route path='/goback' element={<Goback/>} />
        <Route path='/footer' element={<Footer/>} />
        <Route path='/students' element={<Students/>} />
        <Route path='/student/:id' element={<Student/>} />
        <Route path='*' element={<h2>Not Found</h2>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
