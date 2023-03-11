import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Loader from './Loader';
import Navbar from './Navbar';
import Login from '../pages/Login';
import { useAuth } from '../hooks/useProvideAuth';
import SignUp from '../pages/SignUp';

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
