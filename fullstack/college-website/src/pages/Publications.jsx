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
        // Debug log to check link values
        console.log('Link values:', papersData.map(p => ({title: p.title, link: p.links})));
        setPapers(papersData || []);
        console.log(papersData);
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
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Research Papers</h2>

      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4 mb-6">
        {/* Department dropdown */}
        <div className="flex items-center">
          <label className="mr-2 font-medium">Department: </label>
          <select
            value={filters.department}
            onChange={(e) => setFilters({ ...filters, department: e.target.value })}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Departments</option>
            <option>Computer Science</option>
            <option>Electronics and Computer Science</option>
            <option>Computer Science Engineering</option>
            <option>Mechanical Engineering</option>
          </select>
        </div>

        {/* Year input */}
        <div className="flex items-center">
          <label className="mr-2 font-medium">Year: </label>
          <input
            placeholder="Year"
            type="number"
            value={filters.year}
            onChange={(e) =>
              setFilters({ ...filters, year: e.target.value, academicYear: '' })
            }
            className="border rounded px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Academic year buttons */}
      <div className="flex flex-wrap gap-2 my-4">
        {['2023-2024', '2022-2023', '2021-2022', '2020-2021'].map(range => (
          <button
            key={range}
            onClick={() => handleAcademicYearClick(range)}
            className={`px-3 py-1 rounded ${
              filters.academicYear === range 
                ? 'bg-blue-100 text-blue-800 border border-blue-500' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Title</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Authors</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Department</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Year</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Citations</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map(p => (
                <tr key={p.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">
                    {p.links ? (
                      <>
                        <a 
                          href={p.links.startsWith('http') ? p.links : `https://${p.links}`} 
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {p.title}
                        </a>
                        {/* Temporary test link to verify link functionality */}
                        <a 
                          href="https://example.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-2 text-red-500 text-xs"
                        >
                          (Test)
                        </a>
                      </>
                    ) : (
                      <span>{p.title}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">{Array.isArray(p.authors) ? p.authors.join(', ') : p.authors}</td>
                  <td className="px-4 py-3">{p.department}</td>
                  <td className="px-4 py-3">{p.year}</td>
                  <td className="px-4 py-3">{p.citations}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-3 text-center text-gray-500">
                  No papers found for the selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}