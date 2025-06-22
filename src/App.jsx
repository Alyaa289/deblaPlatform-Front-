import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Home from './pages/Home';
import ShopList from './features/shop/ShopList';
import Wishlist from './features/wishlist/Wishlist';
import Appointments from './features/appointments/Appointments';
import ShopOwnerDashboard from './features/dashboard/ShopOwnerDashboard';
import AdminDashboard from './features/admin/AdminDashboard';
import QRCodeSystem from './features/qr/QRCodeSystem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shops" element={<ShopList />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/dashboard" element={<ShopOwnerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/qr" element={<QRCodeSystem />} />
      </Routes>
    </Router>
  );
}

export default App;
