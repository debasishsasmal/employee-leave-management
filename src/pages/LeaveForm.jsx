import React, { useState } from 'react'; 
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useLeaves } from '../context/LeaveContext'; 

const LeaveForm = () => {
  const navigate = useNavigate();
  const { addLeave } = useLeaves(); 
  
  const [formData, setFormData] = useState({
    type: 'Sick Leave',
    date: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    addLeave({
      type: formData.type,
      date: formData.date,
      days: 1, 
      reason: formData.reason
    });

    
    alert("Leave Application Submitted Successfully! ✅");
    navigate('/employee-dashboard');
  };

  return (
    <div className="h-screen bg-gray-50">
      <Navbar role="employee" />
      <div className="p-10 flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">📝 Apply for Leave</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Leave Type</label>
              <select 
                name="type" 
                value={formData.type} 
                onChange={handleChange} 
                className="w-full border p-2 rounded"
              >
                <option>Sick Leave</option>
                <option>Casual Leave</option>
                <option>Vacation</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Date</label>
              <input 
                type="date" 
                name="date"
                required
                value={formData.date} 
                onChange={handleChange}
                className="w-full border p-2 rounded" 
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Reason</label>
              <textarea 
                name="reason"
                required
                value={formData.reason} 
                onChange={handleChange}
                className="w-full border p-2 rounded" 
                rows="3"
                placeholder="Why do you need leave?"
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded font-bold hover:bg-green-700 transition">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LeaveForm;