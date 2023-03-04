import { useEffect, useState } from 'react';
import getPosts from '../api';
import Home from '../pages/Home';
import Loader from './Loader';

function App() {
  const [post, setPost] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);
      setPost(response.data.posts);
    };
    
    fetchPosts();
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
