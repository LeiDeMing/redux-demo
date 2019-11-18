import React, { Component } from 'react'
import Main from '../components/Main'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadPosts } from '../actions/post'

class App extends Component {
  componentDidMount() {
    const uri = `http://localhost:3389/data`
    axios.get(uri).then(
      res => {
        const posts = res.data
        this.props.loadPosts(posts)
      }
    )
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
