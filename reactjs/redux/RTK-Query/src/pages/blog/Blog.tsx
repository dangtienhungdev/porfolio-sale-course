import CreatePost from '../components/createPost/createPost'
import PostList from '../components/postList/PostList'

const Blog = () => {
  return (
    <div className='p-5'>
      <CreatePost />
      <PostList />
    </div>
  )
}

export default Blog
