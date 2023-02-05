import './App.css';
import React, { useState } from 'react';
import HeaderCountainer from './components/Header/HeaderCountainer';
import Nav from './components/Nav/Nav';
import Info from './components/Info/Info';
import Friends from './components/Friends/Friends';
import { UsersPage } from './components/Users/UsersPage';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { useDispatch } from 'react-redux';
import Preloader from './components/Common/Preloader/Preloader';
import { initializeApp } from './redux/app-reducer';
import ChatPage from './Pages/Chat/ChatPage';
import { AnyAction } from 'redux';



type PropsType = {
  initialized: boolean
}


const App: React.FC<PropsType> = () => {

  const dispatch = useDispatch()

  const initialized = dispatch(initializeApp() as unknown as AnyAction)

  if (!initialized) {
    return <Preloader />
  }

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderCountainer />
        <Nav />
        <div className='app-content'>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer />} />

            <Route path='/profile/' element={<ProfileContainer />} />

            <Route path='/friends' element={<Friends />} />

            <Route path='/messages' element={<MessagesContainer />} />

            <Route path='/users' element={<UsersPage />} />

            <Route path='/login' element={<Login />} />

            <Route path='/chat' element={<ChatPage />} />

            <Route path='/info' element={<Info />} />

            <Route path='/' element={<ProfileContainer />} />

            <Route path='/*' element={<div className='not-found'>Uncorrect address</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;







