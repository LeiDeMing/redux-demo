import React, { Component } from 'react'
import Main from '../components/Main'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadPosts } from '../actions/post'

class App extends Component {
  componentDidMount() {
    this.props.loadPosts()
  }
  render() {
    return (
      <Main />
    )
  }
}
export default connect(null, {
  loadPosts
})(App)
