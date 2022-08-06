import './app.scss'
import { Route, Routes } from "react-router-dom";
import RecentPosts from '../../modules/recent-posts/recent-posts';
import Login from '../../modules/login/login';
import { useContext } from 'react';
import { LoginContext } from '../../context/login-contex';
import Infarmation from '../../modules/infarmation/infarmation';

function App() {

  const {token} = useContext(LoginContext)

  return (
    <>

      {/* {
        token ? <RecentPosts /> : <Login />
      } */}

    <Routes>
      <Route path='/' element={<Infarmation />} />
      {/* <Route path='/' element={<RecentPosts />} /> */}
      {/* <Route path='/' element={<Login />} /> */}
    </Routes>
    </>
  );
}

export default App;
