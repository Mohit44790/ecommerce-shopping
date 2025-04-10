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
    </Route>
   </Routes>
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>
  
    </>
  )
}

export default App
