import { createAction, createReducer } from '@reduxjs/toolkit'

import { Post } from 'types/blog.type'
import { initialPostList } from '../../constants/blog'

interface BlogState {
  postList: Post[]
}

const initialState: BlogState = {
  postList: initialPostList
}

export const addPost = createAction<Post>('blog/addPost')

const blogReducer = createReducer(initialState, (builder) => {
  builder.addCase(addPost, (state, action) => {
    const post = action.payload
    state.postList.push(post)
  })
})

export default blogReducer
