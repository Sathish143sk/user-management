import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function AddUser() {
  const [form, setForm] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/users', form);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddUser;
