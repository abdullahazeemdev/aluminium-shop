import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import About from './pages/About'
import DashboardHome from './pages/DashboardHome'
import Dashboard from './layouts/Dashboard'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Home />} />

                <Route path='/login' element={<Login />} />

                <Route path='/signup' element={<Signup />} />

                {/* Dashboard Layout */}

                <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<DashboardHome />} />
                    <Route path="about" element={<About />} />
                    {/* <Route path="products" element={<Products />} /> */}
                    {/* <Route path="customers" element={<Customers />} /> */}
                    {/* <Route path="settings" element={<Settings />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App