import * as Types from './types'

export function addPosts(post: Posts) {
    const action: PostsAction = {
        type: Types.ADD_POSTS,
        post
    }

    return simulateHttpRequest(action)
}

export function removePosts(post: Posts) {
    const action: PostsAction = {
        type: Types.REMOVE_POSTS,
     post
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