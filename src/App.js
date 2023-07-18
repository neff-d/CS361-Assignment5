import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigate from './components/nav.js';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserRegisterPage from './pages/UserRegisterPage';

function App() {  
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Community Resource Assistance Network</h1>
          <p></p>      
        </header>
      <Navigate/>
        <main>
          <article className="App-article">
            <Route path="/(|index.html)" exact><HomePage /></Route>
            <Route path="/login"><LoginPage /></Route>
            <Route path="/register-user"><UserRegisterPage /></Route>
          </article>
        </main>
        <footer className="App-footer">
          <cite>&copy; 2023 Community Resource Assistance Network</cite>
        </footer>
      </Router>
    </div>
  );
}

export default App;
