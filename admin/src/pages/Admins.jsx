import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext'
import SearchUser from '../components/SearchUser';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthContext()


  const handleUsersFetched = (fetchedUsers) => {
    setUsers(fetchedUsers);
  };
  

  useEffect(() => {
    // Function to fetch all users
    const fetchUsers = async () => {
      try {
        // Replace with your backend URL
        const response = await axios.get('https://clabed-server.vercel.app/api/user/', {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to fetch users, are you an admin?');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;
  
  
  return (
    <div className='admin'>
      
      <h1>All Users</h1>

      <div className="admin-nav">
        <SearchUser onUsersFetched={handleUsersFetched}/>
        <NavLink to='/signup'>Add Admin</NavLink>
      </div>

      <div className="users">
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <p>Email: {user.email}</p>
              <p className={`roles ${user.role}`}>{
                  user.role === 'admin' ? 'Super Admin' 
                  : user.role === 'user' ? 'Admin' 
                  : ''
                }
              </p>
              <div className="line"></div>
              {/* Add other user details as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllUsers;
