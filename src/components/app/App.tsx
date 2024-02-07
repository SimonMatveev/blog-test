import { Navigate, Route, Routes } from 'react-router';
import Main from '../main/Main';
import NotFound from '../notFound/NotFound';
import PostPage from '../post-page/PostPage';
import './app.scss';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/posts' element={<Main />} />
        <Route path='/posts/:id' element={<PostPage />} />
        <Route path='/' element={<Navigate to='/posts' />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
