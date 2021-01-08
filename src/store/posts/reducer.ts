import * as Types from "./types"


const initialState: PostsState = {

    posts: [
    {
      id: 1,
      name: "Amina Aden",
      email: "aden@gmail.com",
      title: "MC",
      photo: "https://images.unsplash.com/photo-1573748348952-91cc89c83979",
      transport: "bike",
      time: 1,
      active: true
    },
        
        {
          id: 2,
          name: "Yasin Ali",
          email: "yasin@gmail.com",
          title: "Grocery store",
          photo: "https://images.unsplash.com/photo-1518882570151-157128e78fa1",
          transport: "taxi",
          time: 2,
          active: true
        },
        // {
        //   "id": 3,
        //   "name": "Amber Williams",
        //   "email": "amber@gmail.com",
        //   "title": "Post office",
        //   "photo": "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb",
        //   "transport": "car",
        //   "time": 15,
        //   "active": true
        // },
        // {
        //   "id": 4,
        //   "name": "Ida Niskanen",
        //   "email": "ida.niskanen@gmail.com",
        //   "title": "Off to Ikea",
        //   "photo": "https://images.unsplash.com/photo-1499155286265-79a9dc9c6380",
        //     "transport": "bus",
        //     "time": 20,
        //   "active": true
        // },
        // {
        //   "id": 5,
        //   "name": "Khela Somti",
        //   "email": "khela@gmail.com",
        //   "title": "The Park",
        //   "photo": "https://images.unsplash.com/photo-1578220390767-b706eac7c36b",
        //   "transport": "moped",
        //   "time": 30,
        //   "active": true
        // },
        // {
        //   "id": 6,
        //   "name": "Sang Wang",
        //   "email": "wang@gmail.com",
        //   "title": "North",
        //   "photo": "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5",
        //   "transport": "car",
        //   "time": 25,
        //   "active": true
        // },
      
        // {
        //   "id": 7,
        //   "name": "Annie Lim",
        //   "email": "lim@gmail.com",
        //   "title": "Post Office",
        //   "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        //   "transport": "taxi",
        //   "time": 35,
        //   "active": false
        // },
        // {
        //   "id": 8,
        //   "name": "Sang Wang",
        //   "email": "wang@gmail.com",
        //   "title": "North",
        //   "photo": "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5",
        //   "transport": "car",
        //   "time": 25,
        //   "active": true
        // },
      
        // {
        //   "id": 9,
        //   "name": "Annie Lim",
        //   "email": "lim@gmail.com",
        //   "title": "Post Office",
        //   "photo": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        //   "transport": "car",
        //   "time": 35,
        //   "active": false
        // }
      ],
      
}


export default (state: PostsState = initialState, action: PostsAction) => {
  switch (action.type) {
    case Types.ADD_POSTS:
      const newPosts: Posts = {
        id: Math.random(),
        name: action.posts.name,
        email: action.posts.email,
        title: action.posts.title,
        photo: action.posts.photo,
        transport: action.posts.transport,
        time: action.posts.time,
        active: action.posts.active,
      }
      return {
        ...state,
        posts: state.posts.concat(newPosts),
      }
        
    case Types.REMOVE_POSTS:
      const updatedPosts: Posts[] = state.posts.filter(
        posts => posts.id !== action.posts.id
      )
      return {
        ...state,
        posts: updatedPosts
      }
    default:
      return state
  }
}

