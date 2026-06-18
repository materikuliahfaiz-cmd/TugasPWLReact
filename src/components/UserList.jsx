// Nama : Majdi 
// NIM : 2403040205

import { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="card">
      <h2>REST API Users</h2>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id} className="list-item">
              <strong>{user.name}</strong>

              <span>{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;