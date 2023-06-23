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
import ShippingScreen from './screens/shippingScreen';
import PaymentScreen from './screens/paymentScreen';
import PlaceOrderScreen from './screens/placeOrderScreen';


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
            <Route path="/profile" element={<UserDetailsScreen />} />
            
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            
          </Routes>
        </Container> 
      </main>
      <Footer />  
    </BrowserRouter>
  );
}

export default App;
