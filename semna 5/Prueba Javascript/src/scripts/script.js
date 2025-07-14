import { post, get } from "/services/api.js"
const Urlusers = "http://localhost:3000/users"
// routes
const routes = {
  "/": "./pages/home.html",
  "/home":"./pages/home.html",
  "/login": "./pages/login.html",
  "/register": "./pages/register.html",
  "/events":"./pages/events.html"
};

  
async function navigate(pathname) {
  renderizadobotones()
  const route = routes[pathname];
  const html = await fetch(route).then((res) => res.text());
  document.getElementById("content").innerHTML = html;
  history.pushState({}, "", pathname);

  if(pathname === "/register"){
    register();
} else if (pathname === "/login"){
    login();
}else if (pathname === "/reserve") {
    reservation();
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

function renderizadobotones(){
  let access = localStorage.getItem("useracces")== "true";
  const login = document.querySelector(".sesions");
  const register = document.querySelector(".sesion");
  const reserve =document.querySelector("sesion1");
  

  if(access){
    if(login) login.style.display = "none";
    if(register) register.style.display = "none";
    if(reserve) register.style.display = "none";
  }else{
    if(login) login.style.display = "inline-block";
    if(register) register.style.display = "inline-block";
    if(reserve) register.style.display = "inline-block";
  }
}


function register () {

  let formulario = document.getElementById("formulario-register");

  formulario.addEventListener("submit", async (e) =>{
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
 
  const Users = await get (Urlusers);

  let userNuevo = {
    id: String(Users.length),
    name : name,
    email : email,
    password :password,
    role: "user",      
    phone: "1234567890",      
   
  }

  let createuser = await post(Urlusers, userNuevo);

  if(createuser){
    console.log("Usuario creado exitosamente");
    
  }else {
    console.log("Usuario no fue creado");
    
  }
});

}

function login (){
  
  let formulario = document.getElementById("formulario-login");

  formulario.addEventListener("submit", async(e) =>{
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const users = await get(Urlusers)
  const user = users.find (user => user.email === email && user.password === password);

  if(user){
    alert("inicio de sesion exitoso");
    localStorage.setItem("useracces", "true");
    localStorage.setItem("rol", user.rol);
    renderizadobotones()
    navigate("/home");
  }else{
   alert("Contraseña o usuario incorrecto");

  }
  });
} 
function reservation (){
  let formulario = document.getElementById("formulario-reserve")
  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
  let name = document.getElementById ("name").value;
  let email = document.getElementById ("email").value;
  let time = document.getElementById ("reserve").value;
  let date = document.getElementById ("fecha").value
  })

}