import React from 'react';
import Navbar from '../components/Navbar';
import { useLeaves } from '../context/LeaveContext';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import { useState } from 'react'; 

const EmployeeDashboard = () => {
  const { leaves } = useLeaves();
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  return (
    <div className="h-screen bg-gray-50">
      <Navbar role="employee" />

      <div className="p-10 max-w-4xl mx-auto">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">👨‍💼 My Dashboard</h1>
          <button 
            onClick={() => navigate('/apply-leave')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold shadow"
          >
            + Apply Leave
          </button>
        </div>

        {/* Leave Balance Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow border-l-4 border-blue-500">
            <h3 className="text-gray-500">Total Leaves</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="bg-white p-4 rounded shadow border-l-4 border-green-500">
            <h3 className="text-gray-500">Available</h3>
            <p className="text-2xl font-bold">8</p>
          </div>
          <div className="bg-white p-4 rounded shadow border-l-4 border-yellow-500">
            <h3 className="text-gray-500">Used</h3>
            <p className="text-2xl font-bold">4</p>
          </div>
        </div>

        {/* Calendar Section */}
<div className="mb-8 bg-white p-6 rounded-lg shadow flex flex-col items-center">
  <h2 className="text-xl font-semibold mb-4 text-gray-700">📅 Leave Calendar</h2>
  <Calendar 
    onChange={setDate} 
    value={date} 
    className="rounded-lg border-none shadow-sm"
  />
  <p className="mt-4 text-gray-500">Selected Date: {date.toDateString()}</p>
</div>

        {/* Leave History Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold">📜 Leave History</h2>
          </div>
          
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
              <tr>
                <th className="py-3 px-6">Type</th>
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">Days</th>
                <th className="py-3 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {leaves.map((leave) => (
                <tr key={leave.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6">{leave.type}</td>
                  <td className="py-3 px-6">{leave.date}</td>
                  <td className="py-3 px-6">{leave.days} Day(s)</td>
                  <td className="py-3 px-6 font-bold">
                    {/* Status Color Logic */}
                    <span className={
                      leave.status === 'Approved' ? 'text-green-600' :
                      leave.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'
                    }>
                      {leave.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;