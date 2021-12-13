import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUserSession, getUser } from '../../Utils/Common';

const DoctorsList = () => {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    navigate('/login');
  }


  const renderPosts = async (term) => {
    let container = document.querySelector('#doctors');
    let uri = 'http://localhost:8000/doctors?_sort=year_of_exp&_order=desc';
    if (term) {
      uri += `&q=${term}`
    }

    const res = await fetch(uri);
    const posts = await res.json();


    let template = '';
    posts.forEach(post => {
      template += `
        <div className="post">
          <h2>${post.f_name} ${post.l_name}</h2>
          <p><small>D.O.B: ${post.dob}</small></p>
          <p><small>Experience: ${post.year_of_exp}</small></p>
          <a href="/doctorsList/details?id=${post.id}">View Complete Details</a>
        </div>
      `
    });

    container.innerHTML = template;

  }

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchForm = document.querySelector('.search');
    renderPosts(searchForm.term.value.trim());
  }

  window.addEventListener("DOMContentLoaded", () => renderPosts());



  return (
    <div>
      Welcome to the Doctor's List, {user.name}! <br /><br />

      <input
        type="button"
        value="Logout"
        onClick={handleLogout}
      />

      <br /><br />

      <nav>
        <h1>All Doctors</h1>
        <a href="/doctorsList/create">Add a new doctor</a>
      </nav>

      <form className="search">
        <input type="text" placeholder="search term" name="term" onChange={handleSearch}/>
      </form>

      <div id="doctors" className="doctors">

      </div>


    </div>
  );
}

export default DoctorsList;
