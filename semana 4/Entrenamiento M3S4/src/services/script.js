
import { get,post } from "./service";
const urlUsers = "http://localhost:3000/users"


//Capturar los datos del formulario y guardar en Local Storage
const routes = {
  "/": "./src/pages/home.html",
  "/home":"./src/pages/home.html",
  "/login": "./src/pages/login.html",
  "/register": "./src/pages/register.html",
};

async function navigate(pathname) {
  const route = routes[pathname];
  const html = await fetch(route).then((res) => res.text());
  document.getElementById("content").innerHTML = html;
  history.pushState({}, "", pathname);

  if (pathname === "/register"){
    register()
  }else if(pathname === "/login"){
    login()
  }
  if (pathname === "/home") {
  setTimeout(() => {
    initUserStorage(); // solo agrega esta línea
  }, 100);
}

  

}
document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    navigate(path);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  navigate(location.pathname);
});

window.addEventListener("popstate", () => {
  console.log("se hizo clic");
  console.log(location);
  navigate(location.pathname);
});
function register () {
  let  formRegister = document.getElementById("formulario-register");
  formRegister.addEventListener ("submit", async (e)=> {
    e.preventDefault();
    let name = document.getElementById ("name").value;
    let age = document.getElementById ("age").value;
    let email = document.getElementById ("email").value;
    let password = document.getElementById ("password").value;

    const getUsers = await get(urlUsers);

    let newUser = {
      id:String(getUsers.length),
      name: name,
      age: age,
      email: email,
      password: password,
      role : "user",
      phone: "1234567890",
      enrollNumber: "98765432100000",
      dateOfAdmission: "01-Jan-2020"

    };
    let newRegister = await post (urlUsers,newUser)
    if(newRegister){
      console.log("User created succesfully");
    }else {
      console.log("User was not created"); 
    }
  
  });

}
  function login (){
    let formLogin =document.getElementById("formulario-login");
    formLogin.addEventListener ("submit",async (e) => {
      e.preventDefault ();
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      const loginUser = await get(urlUsers);
      const user = loginUser.find(user => 
        user.email === email && user.password === password)
        
      if(user){
      localStorage.setItem("useraccess", "true");
      localStorage.setItem("rol", user.role);
      deleteBtns();
      navigate("/home");
    } else {
      Alerta("user or password incorrect");
      
    }

  })

}
function deleteBtns(){
  let access = localStorage.getItem("useraccess");
  const login = document.getElementById("sesion1");
  const register = document.getElementById("sesion2");

  if(access){
    if(login) login.style.display = "none";
    if(register) register.style.display = "none";
  }else{
    if(login) login.style.display = "inline-block";
    if(register) register.style.display = "inline-block";
  }
  

}
function initUserStorage() {
  showUserData();
  updateSessionCounter();

  const formUser = document.getElementById("formUser");
  const clearBtn = document.getElementById("clearData");

  formUser?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const userage = document.getElementById("userage").value.trim();

    if (!username || !userage || isNaN(userage)) {
      alert("Please enter valid name and age.");
      return;
    }

    const userData = {
      name: username,
      age: userage,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    showUserData();
  });

  clearBtn?.addEventListener("click", () => {
    localStorage.removeItem("userData");
    showUserData();
  });
}

function showUserData() {
  const output = document.getElementById("userOutput");
  const data = JSON.parse(localStorage.getItem("userData"));

  if (data) {
    output.textContent = `Hello ${data.name}, you are ${data.age} years old.`;
  } else {
    output.textContent = "No user data stored.";
  }
}

function updateSessionCounter() {
  let count = sessionStorage.getItem("sessionCount");
  if (!count) count = 0;
  count++;
  sessionStorage.setItem("sessionCount", count);

  const counterElement = document.getElementById("sessionCounter");
  if (counterElement) {
    counterElement.textContent = `Session interactions: ${count}`;
  }
}



