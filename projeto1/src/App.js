
import './App.css';
import { Component } from 'react'


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

  componentDidMount() {
    this.loadPosts()
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photoResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    })

    this.setState({ posts: postsAndPhotos })
  }


  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <div className="post">
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className='post-content'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}


export default App;
