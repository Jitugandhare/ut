import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Dash from './pages/Dash'
// import Dashboard from './components/Dashboard'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard /> } />
                    {/* <Route index element={<Dash />} /> */}
                    <Route path="products" element={<Products />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default App