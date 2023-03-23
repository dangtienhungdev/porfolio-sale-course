import { createAction, createReducer } from '@reduxjs/toolkit'

import { Post } from 'types/blog.type'
import { initialPostList } from '../../constants/blog'

interface BlogState {
  postList: Post[]
}

const initialState: BlogState = {
  postList: initialPostList
}

/* action */
export const addPost = createAction<Post>('blog/addPost')
export const removePost = createAction<string>('blog/removePost')

const blogReducer = createReducer(initialState, (builder) => {
  /* add post */
  builder.addCase(addPost, (state, action) => {
    const post = action.payload
    state.postList.push(post)
  })
  /* delete post */
  builder.addCase(removePost, (state, action) => {
    const postId = action.payload
    const foundPostIndex = state.postList.findIndex((post) => post.id === postId)
    if (foundPostIndex !== -1) {
      state.postList.splice(foundPostIndex, 1)
    }
  })
})

export default blogReducer
