import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Collections from './components/Collections'
import MakeYourOwnCollection from './components/MakeYourOwnCollection'
import CollectionShow from './components/CollectionShow'
import ArtworkShow from './components/ArtworkShow'
import ColourShow from './components/ColourShow'

function App() {
  return ( 
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/collections">
          <Collections />
        </Route>
        <Route exact path="/collections/:collectionId">
          <CollectionShow />
        </Route>
        <Route exact path="/make-your-own-collection">
          <MakeYourOwnCollection />
        </Route>
        <Route exact path="/collections/colour/:collectionColour">
          <ColourShow />
        </Route>
        <Route path="/collections/collection/:id">
          <ArtworkShow />
        </Route>
      </Switch>
    </BrowserRouter> 
  )
}

export default App
