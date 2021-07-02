import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Index from './pages/index/Index'
import Map from './pages/map/Map'
import Event from './pages/event/Event'
import ScrollToTop from './components/ScrollToTop'
import Artist from './pages/artist/Artist'



//Product
import Product from './pages/product/Product'



// User
import Add from './pages/user/Add'
import Login from './pages/user/Login'
import MsgEdit from './pages/user/MsgEdit'
import PwdEdit from './pages/user/PwdEdit'
import OrderPro from './pages/user/OrderPro'
import OrderTic from './pages/user/OrderTic'
import OrderProDetail from './pages/user/OrderProDetail'
import OrderTicDetail from './pages/user/OrderTicDetail'
import Coupon from './pages/user/Coupon'

// Event
import EventList from './pages/event/EventList'
import EventDetail from './pages/event/EventDetail'
import WorkshopShare from './pages/event/WorkshopShare'
import WorkshopUpload from './pages/event/WorkshopUpload'

function App() {
  return (
    <Router>
      <>
        <Nav />
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path="/event/event-list/detail/upload"
            >
              <WorkshopUpload />
            </Route>
            <Route
              exact
              path="/event/event-list/detail/share"
            >
              <WorkshopShare />
            </Route>
            <Route exact path="/event/event-list/detail">
              <EventDetail />
            </Route>
            <Route exact path="/event/event-list">
              <EventList />
            </Route>
            {/* 單一路徑 */}
            <Route exact path="/product">
              <Product />
            </Route>
            <Route exact path="/user-add">
              <Add />
            </Route>
            <Route exact path="/user-login">
              <Login />
            </Route>
            <Route exact path="/user-msgedit">
              <MsgEdit />
            </Route>
            <Route exact path="/user-pwdedit">
              <PwdEdit />
            </Route>
            <Route exact path="/user-orderpro">
              <OrderPro />
            </Route>
            <Route exact path="/user-ordertic">
              <OrderTic />
            </Route>
            <Route exact path="/user-orderprodetail">
              <OrderProDetail />
            </Route>
            <Route exact path="/user-orderdetictail">
              <OrderTicDetail />
            </Route>
            <Route exact path="/user-coupon">
              <Coupon />
            </Route>
            {/* <Route exact path="/auction">
              <Auction />
            </Route> */}
            {/* <Route exact path="/cart">
              <Cart />
            </Route> */}
            <Route exact path="/event">
              <Event />
            </Route>
            <Route exact path="/artist">
              <Artist />
            </Route>
            <Route exact path="/map">
              <Map />
            </Route>
            <Route exact path="/">
              <Index />
            </Route>
          </Switch>
        </ScrollToTop>
        <Footer />
      </>
    </Router>
  )
}

export default App
