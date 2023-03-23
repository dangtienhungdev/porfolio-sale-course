import CreatePost from '../components/postList/PostList'
import PostList from '../components/createPost/CreatePost'

const Blog = () => {
  return (
    <div className='p-5'>
      <PostList />
      <CreatePost />
    </div>
  )
}

export default Blog
