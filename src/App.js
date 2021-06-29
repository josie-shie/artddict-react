import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Nav from './components/Nav'
import Index from './pages/index/Index'
import Map from './pages/map/Map'
import Event from './pages/event/Event'
import ScrollToTop from './components/ScrollToTop'
// import Porduct from './pages/porduct/Porduct'
// import Cart from './pages/cart/Cart'
// import User from './pages/user/User'
// import Oction from './pages/oction/Oction'

function App() {
  return (
    <Router>
      <>
        <Nav />
        <ScrollToTop>
          <Switch>
            {/* <Route exact path="/auction">
              <Auction />
            </Route>
            <Route exact path="/product">
              <Product />
            </Route>
            <Route exact path="/user">
              <User />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>*/}
            <Route exact path="/event">
              <Event />
            </Route>
            <Route exact path="/map">
              <Map />
            </Route>
            <Route exact path="/">
              <Index />
            </Route>
          </Switch>
        </ScrollToTop>
      </>
    </Router>
  )
}

export default App
