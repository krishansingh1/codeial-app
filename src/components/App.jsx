import { useEffect } from 'react';
import getPosts from '../api';
function App() {
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);
    };
  }, []);
  return (
    <div className="App">
      <h1>Codeial</h1>
    </div>
  );
}

export default App;
