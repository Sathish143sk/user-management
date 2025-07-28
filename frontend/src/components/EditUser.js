import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '' });

  useEffect(() => {
    api.get(`/users/${id}`).then(res => setForm(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/users/${id}`, form);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditUser;
