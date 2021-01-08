import * as Types from './types'

export function addPosts(posts: Posts) {
    const action: PostsAction = {
        type: Types.ADD_POSTS,
        posts
    }

    return simulateHttpRequest(action)
}

export function removePosts(posts: Posts) {
    const action: PostsAction = {
        type: Types.REMOVE_POSTS,
     posts
    }
    return simulateHttpRequest(action)
}



export function simulateHttpRequest(action: PostsAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}