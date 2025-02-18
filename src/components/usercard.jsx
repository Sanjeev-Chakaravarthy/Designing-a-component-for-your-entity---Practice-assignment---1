import React from 'react';

const Usercard = () => {
 
  const users = [
    {
      id: 1,
      profilePhoto: "https://www.w3schools.com/w3images/avatar2.png",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
      address: "123 Main St, Springfield, IL"
    },
    {
      id: 2,
      profilePhoto: "https://www.w3schools.com/w3images/avatar2.png",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+0987654321",
      address: "456 Oak St, Springfield, IL"
    },
  
  ];

  return (
    <div className="usercards-container">
      {users.map((user) => (
        <div key={user.id} className="usercard">
          <img src={user.profilePhoto} alt="Profile" className="profile-photo" />
          <div className="user-details">
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Usercard;
