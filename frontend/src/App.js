import { Container } from 'react-bootstrap'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from './components/header'
import Footer from './components/footer'
import HomeScreen from './screens/homeScreen';
import ProductScreen from './screens/productScreen';
import CartScreen from './screens/cartScreen';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import UserDetailsScreen from './screens/userDetailsScreen';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-5'>
        <Container>
          <Routes>
            {" "}
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login/" element={<LoginScreen />} />
            <Route path="/register/" element={<RegisterScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
            <Route path="/profile" element={<UserDetailsScreen />} />
          </Routes>
        </Container> 
      </main>
      <Footer />  
    </BrowserRouter>
  );
}

export default App;
