import React from 'react';
import Navbar from '../components/Navbar';
import { useLeaves } from '../context/LeaveContext'; 

const AdminDashboard = () => {
  const { leaves, updateLeaveStatus } = useLeaves(); 

  return (
    <div className="h-screen bg-gray-50">
      <Navbar role="admin" />

      <div className="p-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">👑 Admin Dashboard</h1>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
              <tr>
                <th className="py-3 px-6">Employee</th>
                <th className="py-3 px-6">Leave Type</th>
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {leaves.map((leave) => (
                <tr key={leave.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6 font-medium">{leave.employeeName || 'User'}</td>
                  <td className="py-3 px-6">{leave.type}</td>
                  <td className="py-3 px-6">{leave.date}</td>
                  <td className="py-3 px-6">
                    <span className={`font-bold ${
                      leave.status === 'Approved' ? 'text-green-600' :
                      leave.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {leave.status}
                    </span>
                  </td>
                  <td className="py-3 px-6">
                    {/* Only show buttons for pending leaves */}
                    {leave.status === 'Pending' ? (
                      <div className="flex gap-2">
                        <button 
                          onClick={() => updateLeaveStatus(leave.id, 'Approved')}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm transition"
                        >
                          Approve
                        </button>
                        <button 
                          onClick={() => updateLeaveStatus(leave.id, 'Rejected')}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm transition"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">Done</span>
                    )}
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
export default AdminDashboard;