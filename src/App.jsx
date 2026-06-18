// Nama : Majdi 
// NIM : 2403040205

import './App.css';

import UserList from './components/UserList';
import LaunchList from './components/LaunchList';

function App() {
  return (
    <div className="container">
      <h1 className="title">
        React API Dashboard
      </h1>

      <p className="subtitle">
        Integrasi REST API dan GraphQL
        menggunakan React + Vite + Apollo
      </p>

      <div className="grid">
        <UserList />
        <LaunchList />
      </div>
    </div>
  );
}

export default App;