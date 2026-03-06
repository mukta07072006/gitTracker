document.getElementById("signin-btn").addEventListener("click", ()=>{
   const username = document.getElementById("username").value
   const password = document.getElementById("password").value
   console.log(username,password);

   if (username === "admin" && password === "admin123"){
    window.location.href = "../home.html"
   }
   else {
    alert("Wrong credentials")
   }
})