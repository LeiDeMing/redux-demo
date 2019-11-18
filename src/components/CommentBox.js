import React, { Component } from 'react'
import store from '../store'
import shotrId from 'shortid'
import styled from 'styled-components'

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
        const { id, addComment } = this.props
        const comment = { id: shotrId(), text }
        store.dispatch({ type: 'ADD_COMMENT', comment })
    }
    render() {
        const { text } = this.state
        const comments = store.getState().comments
        const commentList = comments.map(comment => (
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