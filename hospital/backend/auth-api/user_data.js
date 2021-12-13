// static user details

let userData = [

    {
    userId: "789789",
    password: "123456",
    name: "Sree Nivetha B B",
    username: "sree_nivetha_bb",
    isAdmin: false

    },

    {
    userId: "789789",
    password: "123456",
    name: "Jupuru Harshith",
    username: "harshith",
    isAdmin: false

    },

    {
    userId: "789789",
    password: "123456",
    name: "Sree Nithish B",
    username: "sree_nithish_b",
    isAdmin: true

    },

    {
    userId: "789789",
    password: "123456",
    name: "Sandeep Thadem",
    username: "sandeep",
    isAdmin: true

    },
  ];

// import fetch from "node-fetch";
//
// const getAllUsers = async () => {
//   let uri = " http://localhost:8000/users";
//
//   const res = await fetch(uri);
//   const users = await res.json();
//
//   console.log(users);
//
//   return users
// }
//
// ;(async () => {
//   const userData = await getAllUsers()
//   module.exports = await { userData : userData };
// })()




module.exports = { userData : userData };
