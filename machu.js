

  var loginForm=document.getElementById("login");

  var errorMsg=document.getElementById('error-msg');
  var successMsg=document.getElementById('success-msg');

  var button=document.getElementById('btn-submit');
  button.addEventListener('click',(e) => {

   e.preventDefault();
   var email=loginForm.email.value;
   var password=loginForm.password.value;

   if(email === "test@gmail.com" && password === "test123"){
     successMsg.classList.remove("visually-hidden");
     errorMsg.classList.add("visually-hidden");
   }
   else{
    successMsg.classList.add("visually-hidden");
    errorMsg.classList.remove("visually-hidden");

   }

  }
  
  
  );
// var togglerbtn=document.getElementById("btn");
// var items=document.querySelectorAll(".nav-item");
// var item1=document.querySelectorAll('.nav-item')[0].textContent;
// var item2=document.querySelectorAll('.nav-item')[1].textContent;
// var item3=document.querySelectorAll('.nav-item')[2].textContent;


// togglerbtn.addEventListener("click",function(){
//       item1.display();
//       item2.display();
//       item3.display();

// });