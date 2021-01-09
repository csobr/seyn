interface Posts {
    id: number,
    name: string,
    email: string,
    title: string,
    photo: string,
    transport: string,
    time: number,
    active: boolean
}

type PostsState = {
 posts: Posts[]
}

type PostsAction = {
    type: string
    post: Posts
}

type DispatchType = (args: PostsAction) => PostsAction