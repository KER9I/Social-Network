import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Info from './components/Info/Info';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-content'>
          <Routes>
          <Route path='/profile' element={<Profile postData={props.postData} />}/>
          <Route path='/friends' element={<Friends/>}/>
          <Route path='/messages' element={<Messages messagesData={props.messagesData} messagesText={props.messagesText} />}/> 
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/info' element={<Info/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
