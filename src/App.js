import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/register/Register.js';
import Login from './pages/login/Login.js';
import Home from './pages/home/Home.js';
import BindBankCard from './components/BindBankCard/BindBankCard.js';
import Invitation from './components/Invitation/Invitation.js';
import Bonus from './components/Bonus/Bonus.js';
import ProductPage from './components/ProductPage/ProductPage.js';
import SingleProduct from './components/SingleProduct/SingleProduct.js';
import MyProfile from './components/MyProfile/MyProfile.js';
import MyTeam from './components/MyTeam/MyTeam.js';
import { useState } from 'react';
import ForgotPassword from './pages/forgotPassword/forgotPassword.js';
import Checkout from './pages/ckeckout/checkout.js';
import TransactionCompleted from './pages/transaction/transaction.js';
import PrivateRoute from './routes/privateRoutes.js';
import Dashboard from './pages/Admin/AdminDashbord/AdminDashbord.js';
import AllUsers from './pages/Admin/AllUsers/AllUsers.js';
import PaidUsers from './pages/Admin/PaidUsers/PaidUsers.js';
import UnpaidUsersList from './pages/Admin/UnpaidUserslist/UnpaidUserslist.js';
import BlockedUsers from './pages/Admin/BlockedUsers/BlockedUsers.js';
import DownlineUsers from './pages/Admin/DownlineUsers/DownlineUsers.js';
import ActivationReport from './pages/Admin/ActivationReport/ActivationReport.js';
import ActivateUserForm from './pages/Admin/ActivateUserForm/ActivateUserForm.js';
import AdminTransactions from './pages/Admin/AdminTransaction/AdminTransacion.js';
import AdminRoute from './routes/adminRoutes.js';
import AddProduct from './pages/Admin/AddProduct/AddProduct.js';
import AllProducts from './pages/Admin/AllProducts/AllProducts.js';
import UpdateProduct from './pages/Admin/UpdateProduct/UpdateProduct.js';
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin.js';
function App() {
  
  return (
    <div className="">
      <div className="wrapper">
      <Routes>
      <Route path="/users" element={<PrivateRoute />}>
          <Route path="user" element={<MyProfile />} />
          <Route path="user/checkout" element={<Checkout />} />
          <Route path="user/bindBankCard" element={<BindBankCard />} />
          <Route path="user/transaction" element={<TransactionCompleted />} />
          <Route path="user/invitation" element={<Invitation />} />
          <Route path="user/bonus" element={<Bonus />} />
          <Route path="user/all-products" element={<ProductPage />} />
          <Route path="user/single-product" element={<SingleProduct />} />
          <Route path="user/my-team" element={<MyTeam />} />
          <Route path="user/forgot-password" element={<ForgotPassword />} />
          <Route path="user/make-payment" element={<BindBankCard />} />
      </Route>
      <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<Dashboard />} />
          <Route path="admin/add-product" element={<AddProduct/>} />
          <Route path="admin/all-products" element={<AllProducts/>} />
          <Route path="admin/update-product/:id" element={<UpdateProduct/>} />
          <Route path="admin/all-users" element={<AllUsers />} />
          <Route path="admin/all-paid-users" element={<PaidUsers />} />
          <Route path="admin/all-unpaid-users-list" element={<UnpaidUsersList />} />
          <Route path="admin/blocked-users" element={<BlockedUsers />} />
          <Route path="admin/downline-users" element={<DownlineUsers />} />
          <Route path="admin/activation-report" element={<ActivationReport />} />
          <Route path="admin/activate-user" element={<ActivateUserForm />} />
          <Route path="admin/transactions" element={<AdminTransactions />} />
      </Route>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin/>} />
        
      
      </Routes>
    </div>
    </div>
  );
}

export default App;
