import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '@/views/Home'
import Post from '@/views/Post'
import About from '@/views/About'
import Archive from '@/views/Archive'

const Routes = _ => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/post/:id" component={Post} />
    <Route path="/about" component={About} />
    <Route path="/archive" component={Archive} />
  </Switch>
)
export default Routes
