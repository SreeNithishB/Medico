import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUserSession, getUser } from '../../Utils/Common';

const DoctorsCreate = () => {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    navigate('/login');
  }




  const createPost = async (e) => {
    let form = document.querySelector('form');
    e.preventDefault();

    const doc = {
      f_name: form.f_name.value,
      l_name: form.l_name.value,
      email: form.email.value,
      user_name: form.user_name.value,
      mobile: form.mobile.value,
      dob: form.dob.value,
      city: form.city.value,
      state: form.state.value,
      specialiation: form.specialiation.value,
      year_of_exp: form.year_of_exp.value,
      is_admin: false,
      is_doctor: true,
    }

    await fetch('http://localhost:8000/doctors', {
      method: 'POST',
      body: JSON.stringify(doc),
      headers: { 'Content-Type': 'application/json' }
    })

    window.location.replace('/doctorsList')
  }


const CreateDoctor = () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', createPost);
}


  return (
    <div>
      Welcome to the Doctor's List, {user.name}! <br /><br />

      <input
        type="button"
        value="Logout"
        onClick={handleLogout}
      />

      <br /><br />

      <h1>Create a New Blog</h1>

      <form>
        <input type="text" name="f_name" required placeholder="First Name" />
        <input type="text" name="l_name" required placeholder="Last Name" />
        <input type="text" name="email" required placeholder="email" />
        <input type="text" name="user_name" required placeholder="user name" />
        <input type="text" name="mobile" required placeholder="Phone Number" />
        <input type="text" name="dob" required placeholder="D.O.B" />
        <input type="text" name="city" required placeholder="City" />
        <input type="text" name="state" required placeholder="State" />
        <input type="text" name="specialiation" required placeholder="Specialized in" />
        <input type="text" name="year_of_exp" required placeholder="Years of experience" />
        <button onClick={CreateDoctor}>Create</button>
      </form>


    </div>
  );
}

export default DoctorsCreate;
