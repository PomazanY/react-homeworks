import { Routes, Route } from 'react-router-dom';

import NavMenu from '../NavMenu/NavMenu';
import MainPage from '../../pages/MainPage/MainPage';
import PostListPage from '../../pages/PostListPage/PostListPage';
import PostPage from '../../pages/PostPage/PostPage';

import './App.css'

function App() {


  return (
    <>
      <NavMenu/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/posts' element={<PostListPage/>} />
        <Route path='/posts/:id' element={<PostPage/>} />
      </Routes>

    </>
  )
}

export default App
