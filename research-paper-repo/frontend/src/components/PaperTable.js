import { useEffect, useState } from 'react';
import API from 'C:/Users/Admin/Desktop/research-paper-repo/frontend/src/api';

export default function PaperTable() {
  const [papers, setPapers] = useState([]);
  const [filters, setFilters] = useState({ year: '', department: '', academicYear: '' });

  useEffect(() => {
    API.get('/papers')
      .then(res => {
        console.log('RAW API Response:', res.data);
        const papersData = Array.isArray(res.data) ? res.data : res.data.papers;
        setPapers(papersData || []);
      })
      .catch(err => {
        console.error('Error fetching papers:', err);
        setPapers([]); // fallback empty array if error
      });
  }, []);

  const handleAcademicYearClick = (range) => {
    const startYear = range.split('-')[0];
    setFilters({ ...filters, academicYear: range, year: startYear });
  };

  const filtered = papers.filter(p =>
    (!filters.year || String(p.year).trim() === String(filters.year).trim()) &&
    (!filters.department || p.department === filters.department)
  );

  console.log('Current Filters:', filters);
  console.log('Filtered Papers:', filtered);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Research Papers</h2>

      {/* Department dropdown */}
      <label>Department: </label>
      <select
        value={filters.department}
        onChange={(e) => setFilters({ ...filters, department: e.target.value })}
      >
        <option value="">All Departments</option>
        <option>Computer Science</option>
        <option>Electronics and Computer Science</option>
        <option>Computer Science Engineering</option>
        <option>Mechanical Engineering</option>
      </select>

      {/* Academic year buttons */}
      <div style={{ margin: '10px 0' }}>
        {['2023-2024', '2022-2023', '2021-2022', '2020-2021'].map(range => (
          <button
            key={range}
            onClick={() => handleAcademicYearClick(range)}
            style={{
              marginRight: '8px',
              backgroundColor: filters.academicYear === range ? '#d1d1ff' : '#f0f0f0',
              padding: '5px 10px'
            }}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Year input */}
      <label>Year: </label>
      <input
        placeholder="Year"
        type="number"
        value={filters.year}
        onChange={(e) =>
          setFilters({ ...filters, year: e.target.value, academicYear: '' })
        }
      />

      {/* Table */}
      <table border="1" cellPadding="8" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Department</th>
            <th>Year</th>
            <th>Citations</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map(p => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>{Array.isArray(p.authors) ? p.authors.join(', ') : p.authors}</td>
                <td>{p.department}</td>
                <td>{p.year}</td>
                <td>{p.citations}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No papers found for the selected filters.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
