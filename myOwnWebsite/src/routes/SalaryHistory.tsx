import React from 'react';
import '/src/css/SalaryHistory.css';

const SalaryHistory: React.FC = () => {
  const salaryData = [
    { date: '2024-01-01', amount: '£45,250', description: 'Annual Salary Reviewed' },
    { date: '2023-12-25', amount: '£1316.25', description: 'Christmas Bonus' },
    { date: '2023-02-22', amount: '£39,000', description: 'Salary Increase - Probation Finished'},
    { date: '2022-12-25', amount: '£708', description: 'Christmas Bonus' },
    { date: '2022-08-22', amount: '£37,500', description: 'Starting Salary'},
    // Add more data as needed
  ];

  return (
    <div className="salary-history">
      <h2>Salary History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount (£)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {salaryData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <a href="https://www.jvt.me/posts/2021/09/09/public-salary-history/">A link to what inspired me to do this.</a>
    </div>
    
  );
};

export default SalaryHistory;
