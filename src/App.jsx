import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AddPhone from './pages/AddPhone'
import EditPhone from './pages/EditPhone'
import PhonesList from './pages/PhonesList'
import Wishlist from './pages/WishList'
import PageNotFound from './pages/PageNotFound'

function App() {


  return (
    <>
      <Header/>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/addphone" element={<AddPhone/>} />
            <Route path="/editphone/:id" element={<EditPhone/>} />
            <Route path="/phones" element={<PhonesList/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="*" element={<PageNotFound/>} />

        </Routes>
      <Footer/>
    </>
  )
}

export default App
