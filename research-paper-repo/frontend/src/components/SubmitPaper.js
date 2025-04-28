import { useState } from 'react';
import API from 'C:/Users/Admin/Desktop/research-paper-repo/frontend/src/api';

export default function SubmitPaper() {
  const [paper, setPaper] = useState({ title: '', authors: '', department: 'Computer Science', year: '', citations: 0 });

  const submit = async () => {
    await API.post('/papers', paper);
    alert('Paper submitted!');
  };

  return (
    <div>
      <h2>Submit Research Paper</h2>
      <input placeholder="Title" onChange={(e) => setPaper({ ...paper, title: e.target.value })} />
      <input placeholder="Authors" onChange={(e) => setPaper({ ...paper, authors: e.target.value })} />
      <select onChange={(e) => setPaper({ ...paper, department: e.target.value })}>
        <option>Computer Science</option>
        <option>Electronics and Computer Science</option>
        <option>Computer Science Engineering</option>
        <option>Mechanical Engineering</option>
      </select>
      <input placeholder="Year" type="number" onChange={(e) => setPaper({ ...paper, year: e.target.value })} />
      <input placeholder="Citations" type="number" onChange={(e) => setPaper({ ...paper, citations: e.target.value })} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
