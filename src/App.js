import React, {useContext} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { UserContext } from './Context/UserContext'
import { Route } from 'react-router-dom'
import {
  AdminRouter,
  PublicRouter,
  PrivateRouter
} from './Components/Router'
import {
  Products,
  DashBoard,
  InvoiceDetail,
  Invoice,
  Cart,
  Home,
  Login,
  SignUp,
  User
} from './page'
import Header from './Components/Layout/Header/Header'
import Footer from './Components/Layout/Footer'


function App() {
  const { user } = useContext(UserContext)
  return (
      <div className="App">
        <Header />
        <main>
          <PublicRouter path="/cart" component={Cart} exact={true} />
          <PublicRouter path="/products" component={Products} exact={true} />
          <PrivateRouter path="/invoice" component={Invoice} isAuth={user.isLoggined} exact={true} />
          <PrivateRouter path="/invoice/:id" component={InvoiceDetail} isAuth={user.isLoggined} />
          <PrivateRouter path="/my-account" component={User} isAuth={user.isLoggined} />
          <PublicRouter path="/login" component={Login} isAuth={user.isLoggined} exact={true} />
          <PublicRouter path="/signup" component={SignUp} isAuth={user.isLoggined} exact={true} />
          <AdminRouter path="/dashboard" component={DashBoard} exact={true} isAuth={user.isLoggined} isAdmin={user.isAdmin} />
          <Route path="/" component={Home} exact={true} />
        </main>
        <Footer />
      </div>
  );
}

export default App;
