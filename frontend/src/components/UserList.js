import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await api.get('/users');
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await api.delete(`/users/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Link to="/add" className="btn btn-primary">➕ Add User</Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <Link to={`/edit/${user.id}`} style={{ marginLeft: 10 }}>✏️</Link>
            <button onClick={() => deleteUser(user.id)} style={{ marginLeft: 10 }}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
