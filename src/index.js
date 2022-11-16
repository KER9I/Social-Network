import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { id: 0, message: 'post 1', likecounter: '1'  },
  { id: 0, message: 'post 2', likecounter: '10'  },
  { id: 0, message: 'post 3', likecounter: '5'  },
  { id: 0, message: 'post 4', likecounter: '8'  },
  { id: 0, message: 'post 5', likecounter: '13'  },
  { id: 0, message: 'post 6', likecounter: '7'  },
]

let messagesData = [
  { id: 0, name: 'Sonya' },
  { id: 1, name: 'Vlad' },
  { id: 2, name: 'Masha' },
  { id: 3, name: 'Sasha' },
  { id: 4, name: 'Max' },
  { id: 5, name: 'Olya' },
]

let messagesText = [
  { id: 0, message: 'Text 1' },
  { id: 1, message: 'Text 2' },
  { id: 2, message: 'Text 3' },
  { id: 3, message: 'Text 4' },
  { id: 4, message: 'Text 5' },
  { id: 5, message: 'Text 6' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} messagesData={messagesData} messagesText={messagesText} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
