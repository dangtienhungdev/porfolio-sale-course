import { createAction, createReducer } from '@reduxjs/toolkit'

import { Post } from 'types/blog.type'
import { initialPostList } from '../../constants/blog'

interface BlogState {
  postList: Post[]
}

const initialState: BlogState = {
  postList: initialPostList
}

const blogReducer = createReducer(initialState, (builder) => {})

export default blogReducer
