import React, { Component } from 'react'
import styled from 'styled-components'
import store from '../store'

class PostBody extends Component {
  render() {
    const { comments, id, posts } = this.props
    console.log(posts)
    const post = posts.find(
      t => t.id === id
    ) || {}
    return (
      <Wrap>
        <p>
          {post.title}
        </p>
        <p>
          {comments.length} 评论
        </p>
      </Wrap>
    )
  }
}

export default PostBody

const Wrap = styled.div`
   background-color: #fff;
   width: 400px;
   margin: 30px auto;
   box-shadow: 0 2px 2px rgba(0, 0, 0, .5);
   height: 300px;
 `