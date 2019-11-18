const initialState = [
    {
      id: '1',
      title: 'Git Tips'
    },
    {
      id: '2',
      title: 'React Tips'
    }
  ]
  
  const posts = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_POSTS':
        return action.posts
      default: 
        return state
    }
  }
  
  export default posts