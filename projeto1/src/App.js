
import './App.css';
import { Component } from 'react'
import { Posts } from './components/Posts'

import { loadPosts } from './utils/load-post';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O Corpo'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O Corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O Corpo 3'
      },
    ]
  }

  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {

    const postsAndPhotos = await loadPosts();

    this.setState({ posts: postsAndPhotos })
  }


  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    )
  }
}


export default App;
