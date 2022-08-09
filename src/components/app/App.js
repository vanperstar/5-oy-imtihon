import './app.scss'
import { Route, Routes } from "react-router-dom";
import RecentPosts from '../../modules/recent-posts/recent-posts';
import Login from '../../modules/login/login';
import Infarmation from '../../modules/infarmation/infarmation';
import NotFount from '../../modules/not-fount/not-fount';

function App() {

  const token = localStorage.getItem('token')
  // const storeToken = useSelector(state => state.token.token)

  return (
    <>

      {
        token ? <RecentPosts /> : <Login />
      }

    <Routes>
      <Route path='/infarmation/:id' element={<Infarmation />} />
      <Route path='/notfount' element={<NotFount />} />
      {/* <Route path='/' element={<RecentPosts />} /> */}
    </Routes>
    </>
  );
}

export default App;
