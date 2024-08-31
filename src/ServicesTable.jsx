import React from 'react';

function ServicesTable() {
  const servicesData = [
    { type: "Web Development", duration: "3 months", cost: "$1500" },
    { type: "Mobile App Development", duration: "5 months", cost: "$2500" },
    { type: "Cloud Migration", duration: "2 months", cost: "$1200" },
    { type: "Tech Consulting", duration: "1 month", cost: "$800" },
    { type: "Cybersecurity Audit", duration: "2 weeks", cost: "$600" },
  ];

  return (
    <div className="services-table-container" style={{ padding: '20px'}}>
      <h2 style={{ textAlign: 'center',color: 'white'}}>Our Services</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#283593', color: '#fff' }}>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Service Type</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Duration</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Package Cost</th>
          </tr>
        </thead>
        <tbody>
          {servicesData.map((service, index) => (
            <tr key={index} style={{ textAlign: 'center', backgroundColor:  '#e8eaf6' }}>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{service.type}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{service.duration}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{service.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServicesTable;
