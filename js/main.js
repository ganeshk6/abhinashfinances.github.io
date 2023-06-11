let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (e) {
    e.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// function message(){
//     var Name = document.getElementById('name');
//     var email = document.getElementById('email');
//     var phone = document.getElementById('phone');
//     var address = document.getElementById('address');
//     var loanTypes = document.getElementById('loanTypes');
//     const success = document.getElementById('success');
//     const danger = document.getElementById('danger');

//     if(Name.value === '' || email.value === '' || phone.value === '' || address.value === '' || loanTypes.value === ''){
//         danger.style.display = 'block';
//     }
//     else{
//         setTimeout(() => {
//             Name.value = '';
//             email.value = '';
//             phone.value = '';
//             address.value = '';
//             loanTypes.value = '';
//         }, 2000);

//         success.style.display = 'block';
//     }


//     setTimeout(() => {
//         danger.style.display = 'none';
//         success.style.display = 'none';
//     }, 4000);

// }

var form = document.getElementById('form');

function myFunction() {
  if (form.checkValidity()) {
    alert("Form Submit Successfully");
  }
}