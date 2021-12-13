import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUserSession, getUser } from '../../Utils/Common';

const DoctorsDetails = () => {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    navigate('/login');
  }



  const renderDetails = async () => {

    let id = new URLSearchParams(window.location.search).get('id');
    let container = document.querySelector('.details');
    let deleteBtn = document.querySelector('.delete');

    const res = await fetch('http://localhost:8000/doctors/' + id);
    if (!res.ok) {
      window.location.replace("/");
    }
    const post = await res.json();

    const template = `
      <h1>${post.f_name} ${post.l_name}</h1>
      <p><small>Specialized in: ${post.specialiation}</small></p>
      <p><small>${post.city}, ${post.state}</small></p>
      <p><small>D.O.B: ${post.dob}</small></p>
      <p><small>Email Id: ${post.email}</small></p>
      <p><small>Phone Number: ${post.mobile}</small></p>
      <p><small>Experience: ${post.year_of_exp}</small></p>
    `

    container.innerHTML = template;
  }



  const deleteRecord = async () => {
    let id = new URLSearchParams(window.location.search).get('id');
    let container = document.querySelector('.details');

    const res = await fetch('http://localhost:8000/doctors/' + id, {
      method: 'DELETE'
    });
    window.location.replace("/doctorsList");

  }



  window.addEventListener('DOMContentLoaded', renderDetails);



  return (
    <div>
      Welcome to the Doctor's List, {user.name}! <br /><br />

      <input
        type="button"
        value="Logout"
        onClick={handleLogout}
      />

      <br /><br />

      <div className="details">

      </div>
      <button className="delete" onClick={deleteRecord}>delete</button>


    </div>
  );
}

export default DoctorsDetails;
