import React from 'react'
import { useNavigate } from 'react-router-dom';
import { removeUserSession, getUser } from '../Utils/Common';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    navigate('/login');
  }


  return (
    <div>
      Welcome to Dashboard, {user.name}! <br /><br />

      <input
        type="button"
        value="Logout"
        onClick={handleLogout}
      />
    </div>
  );
}

export default Dashboard;
