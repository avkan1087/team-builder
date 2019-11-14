import React, {useState} from 'react';
import './App.css';
import data from './data';
import Form from './components/Form';
import UserList from './components/UserList';



function App() {
  const [users, updateUsers] = useState(data)
  return (
    <div className="App">
      <Form users={users} updateUsers={updateUsers} />
      <UserList users={users} />
    </div>
    
  );
}

export default App;
