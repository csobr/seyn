import * as Types from "./types"
import Users from '../../components/Users/Users.json'


const initialState: PostsState = Users


export default (state: PostsState = initialState, action: PostsAction) => {
  switch (action.type) {
    case Types.ADD_POSTS:
      const newPosts: Posts = {
        id: Math.random(),
        name: action.post.name,
        email: action.post.email,
        title: action.post.title,
        photo: action.post.photo,
        transport: action.post.transport,
        time: action.post.time,
        active: action.post.active,
      }
      return {
        ...state,
        posts: state.posts.concat(newPosts),
      }
        
    case Types.REMOVE_POSTS:
      const updatedPosts: Posts[] = state.posts.filter(
        posts => posts.id !== action.post.id
      )
      return {
        ...state,
        posts: updatedPosts
      }
    default:
      return state
  }
}

