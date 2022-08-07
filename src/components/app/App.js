import './app.scss'
import { Route, Routes } from "react-router-dom";
import RecentPosts from '../../modules/recent-posts/recent-posts';
import Login from '../../modules/login/login';
import { useContext } from 'react';
import Infarmation from '../../modules/infarmation/infarmation';
import { AuthContext } from '../../context/auth-contex';

function App() {

  const {token} = useContext(AuthContext)

  return (
    <>

      {
        token ? <RecentPosts /> : <Login />
      }

    <Routes>
      <Route path='/infarmation' element={<Infarmation />} />
    </Routes>
    </>
  );
}

export default App;
