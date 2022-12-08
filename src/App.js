import './App.css';
import React from 'react';
import HeaderCountainer from './components/Header/HeaderCountainer';
import Nav from './components/Nav/Nav';
import Info from './components/Info/Info';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => {
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

            <Route path='/users' element={<UsersContainer />} />
            
            <Route path='/news' element={<News />} />
            
            <Route path='/music' element={<Music />} />
            
            <Route path='/settings' element={<Settings />} />
            
            <Route path='/info' element={<Info />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
