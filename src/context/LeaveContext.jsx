import React, { createContext, useState, useContext } from 'react';

const LeaveContext = createContext();

export const LeaveProvider = ({ children }) => {
  const [leaves, setLeaves] = useState([
    {
      id: 1,
      employeeName: "John Doe",
      type: 'Sick Leave',
      date: '2024-01-10',
      days: 2,
      status: 'Approved',
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      type: 'Casual Leave',
      date: '2024-01-15',
      days: 1,
      status: 'Pending',
    }
  ]);

  
  const addLeave = (newLeave) => {
    setLeaves([
      ...leaves, 
      { 
        id: Date.now(), 
        ...newLeave, 
        status: 'Pending',
        employeeName: "Debasish" 
      }
    ]);
  };

  
  const updateLeaveStatus = (id, newStatus) => {
    setLeaves(leaves.map(leave => 
      leave.id === id ? { ...leave, status: newStatus } : leave
    ));
  };

  return (
    
    <LeaveContext.Provider value={{ leaves, addLeave, updateLeaveStatus }}>
      {children}
    </LeaveContext.Provider>
  );
};

export const useLeaves = () => useContext(LeaveContext);