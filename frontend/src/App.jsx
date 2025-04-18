import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'
import OurStore from './pages/OurStore'
import Blog from './pages/Blog'
import CompareProduct from './pages/CompareProduct'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import CartPage from './pages/CartPage'
import PreviewPage from './pages/PreviewPage'
import CheckOutPage from './pages/CheckOutPage'
import SingleBlog from './pages/SingleBlog'
import PlaceOrder from './pages/PlaceOrder'
import BuyPage from './pages/BuyPage'
import CategoryItemsPage from './pages/CategoryItemsPage'



function App() {  


  return (
    <>
   <BrowserRouter>
   <Routes>
    {/* //layout parent */}
    <Route path='/' element={<Layout/>}>
    

    <Route index element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='store' element={<OurStore/>} />
    <Route path='blogs' element={<Blog/>} />
    <Route path='compare-product' element={<CompareProduct/>} />
    <Route path='wishlist' element={<Wishlist/>} />
    <Route path='forgot-password' element={<ForgotPassword/>} />
    <Route path="cart" element={<CartPage />} />
    <Route path="checkout" element={<CheckOutPage />} />
    <Route path="blog/:id" element={<SingleBlog />} />
    <Route path="preview/:id" element={<PreviewPage />} />
    <Route path="/category/:title" element={<CategoryItemsPage />} />
    <Route path="placeorder" element={<PlaceOrder />} />
    <Route path="buynow" element={<BuyPage />} />
    </Route>
   </Routes>
   <Routes>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>
  
    </>
  )
}

export default App
