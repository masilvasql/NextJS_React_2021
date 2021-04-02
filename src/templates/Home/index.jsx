
import './styles.css';
import {  useEffect, useState, useCallback } from 'react'
import { Posts } from '../../components/Posts'
import Button from '../../components/Button'
import { TextInput } from '../../components/TextInput'
import { loadPosts } from '../../utils/load-post';

export const Home = () => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');
  const noMorePosts = page + postsPerPage >= allPosts.length;

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }


  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage))
    setAllPosts(postsAndPhotos)

  },[])
  useEffect(()=>{
    handleLoadPosts(0, postsPerPage);
  },[handleLoadPosts, postsPerPage])

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  }

  const filteredPosts = !!searchValue
    ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
    })
    : posts;

  return (
    <section className="container">
      <TextInput searchValue={searchValue} handleChange={handleChange} />

      {
        filteredPosts.length > 0 && <Posts posts={filteredPosts} />
      }

      {
        filteredPosts.length === 0 && <h1>No Posts</h1>
      }

      <div className='button-container'>
        {
          !searchValue && (
            <Button
              text={'Load More Posts'}
              loadMorePosts={loadMorePosts}
              disabled={noMorePosts}
            />
          )
        }

      </div>
    </section>
  )
}


export default Home;
