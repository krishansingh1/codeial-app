import { useEffect, useState } from 'react';
import getPosts from '../api';
import Home from '../pages/Home';
import Loader from './Loader';

function App() {
  const [post, setPost] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);
      if (response.success) {
        setPost(response.data.posts);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);
  return (
    <div className="App">
      <Home posts={post} />
    </div>
  );
}

export default App;
