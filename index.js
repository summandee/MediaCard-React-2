import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MediaCard from './Component/MediaCard';
import Body from './Component/Body';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
 
    
    <MediaCard title="Assignment React 2"
                  para="This is a New Modified Assignment which one I had  Submitted but  now I have made the entire document again.I have used Props, ternary operator with functions and and make text bold with b tag. This is complete work"
                
                  fname="Miss Faiza"
                  ftext="She is Excellent Teacher."
                  fbtn="See Profile"
            
                  Aname="Mohammad Ali"
                  Atext="He is Excellent Teacher."
                  Abtn="See Profile"/>

<Body />

<App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
