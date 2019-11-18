import axios from 'axios'

export const loadPosts = () => {
    return dispatch => {
        const uri = `http://localhost:3389/data`
        axios.get(uri).then(
            res => {
                const posts = res.data
                dispatch({
                    type: 'LOAD_POSTS',
                    posts
                })
            }
        )
    }
}