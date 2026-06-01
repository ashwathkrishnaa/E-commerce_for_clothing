import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import About from './pages/About'
import Cart from './pages/Cart'
import Child from './pages/Child'
import DemoPro1 from './pages/DemoPro1'
import Login from './pages/Login'
import Men from './pages/Men'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Women from './pages/Women'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <div>
      {isLoggedIn && (
        <nav style={{padding: '15px', background: '#111', display: 'flex', gap: '30px', justifyContent: 'center', color: 'white'}}>
          <Link to="/home" style={{color: 'white', textDecoration: 'none', fontSize: '16px'}}>Home</Link>
          <Link to="/about" style={{color: 'white', textDecoration: 'none', fontSize: '16px'}}>About</Link>
          <Link to="/men" style={{color: 'white', textDecoration: 'none', fontSize: '16px'}}>Men</Link>
          <Link to="/women" style={{color: 'white', textDecoration: 'none', fontSize: '16px'}}>Women</Link>
          <Link to="/child" style={{color: 'white', textDecoration: 'none', fontSize: '16px'}}>Child</Link>
          <Link to="/cart" style={{color: 'white', textDecoration: 'none', fontSize: '16px'}}>Cart</Link>
          <Link to="/profile" style={{color: 'white', textDecoration: 'none', fontSize: '16px'}}>Profile</Link>
          <button onClick={handleLogout} style={{background: '#d89345', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', color: 'black'}}>Logout</button>
        </nav>
      )}
      
      <Routes>
        <Route path="/" element={isLoggedIn ? <DemoPro1 /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={isLoggedIn ? <DemoPro1 /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/men" element={isLoggedIn ? <Men /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/women" element={isLoggedIn ? <Women /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/child" element={isLoggedIn ? <Child /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cart" element={isLoggedIn ? <Cart /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </div>
  )
}
