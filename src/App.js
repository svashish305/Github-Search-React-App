import React from 'react';
import {useFetch} from './hooks/useFetch';
import UserList from './components/user-list';
import './App.scss';


function App() {

  const [userList, loading, error] = useFetch();

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error loading App</h1>

  return (
    <div className="App">
      <header className="App-header">
        Github Search App
      </header>
      <UserList userList={userList} />
    </div>
  );
}

export default App;
