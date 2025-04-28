import { useState } from 'react';
import API from 'C:/Users/Admin/Desktop/research-paper-repo/frontend/src/api';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });

  const register = async () => {
    await API.post('/auth/register', form);
    alert('Registered! Please login.');
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
      </select>
      <button onClick={register}>Register</button>
    </div>
  );
}
