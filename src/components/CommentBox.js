import React, { Component } from 'react'
import store from '../store'
import shotrId from 'shortid'
import styled from 'styled-components'
import { addComment } from '../actions'

class PostComment extends Component {
    state = {
        text: ''
    }
    handelChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    addComment = () => {
        const { text } = this.state
        const { postId, addComment } = this.props
        const comment = { id: postId, text }
        this.props.addComment(comment)  
    }
    render() {
        const { state: { text }, props: { comments, postId } } = this
        const currentComments = comments.filter(
            t => t.id === postId
        )
        const commentList = currentComments.map(comment => (
            <li key={comment.id}>{comment.text}</li>
        ))
        return (
            <Wrap>
                <input type="text" value={text} onChange={this.handelChange} />
                <button onClick={this.addComment}>评论</button>
                <ul>{commentList}</ul>
            </Wrap>
        )
    }
}

export default PostComment

const Wrap = styled.div`
   background-color: #fff;
   width: 400px;
   margin: 30px auto;
   box-shadow: 0 2px 2px rgba(0, 0, 0, .5);
   height: 300px;
 `