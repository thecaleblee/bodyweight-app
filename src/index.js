import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' 
import About from './pages/About'
import IndexPage from './pages/IndexPage'
import Workout from './pages/Workout'

function Index() {
  return (
    <Router>
      <Route path="/" exact component={IndexPage} />
      <Route path="/about" component={About} />
      <Route path="/workout" component={Workout} />
    </Router>
  )
}

ReactDOM.render(<Index />, document.getElementById("index"));