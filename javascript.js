

"use strict"; 


const form = document.getElementById("fullForm");

// function to validate the form
function isFormValid() {
    // prevent default at the beginning
    event.preventDefault();

    // form inputs
    const name = document.querySelector("#fullName");
    const phone = document.querySelector("#phone");
    const email= document.querySelector("#email");
    const comments = document.querySelector("#comments");
    const errorList = document.getElementById("errorList");

    // initialize errors array
    let errors = [];
    errorList.classList.add("hide");
    name.classList.remove("error");
    email.classList.remove("error");
    phone.classList.remove("error");
    comments.classList.remove("error");

    // regex patterns
    const nameRegex = /[A-Za-z]\s[A-Za-z]/i;
    const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
 
    // clear any previous errors
    name.nextElementSibling.textContent = "";
    phone.nextElementSibling.textContent = "";
    email.nextElementSibling.textContent = "";
    comments.nextElementSibling.textContent = "";
    
    // check to see if name matches the nameRegex
    if (!name.value.match(nameRegex)) {
        errors.push("Please provide your full name.");
        name.classList.add("error");
    }
    
    // check to see if phone matches phoneRegex
    if (!phone.value.match(phoneRegex)) {
        errors.push("Invalid phone number.");
        phone.classList.add("error");
    }

    // check to confirm there's an email match the regexEmail
    if (!email.value.match(regexEmail) || email.value === "") {
        errors.push("Invalid email address.");
        email.classList.add("error");
    }
    
    // check if one of the radio buttons were selected
    const radio1 = document.getElementById("selectedPhone");
    const radio2 = document.getElementById("selectedEmail");

    if (!radio1.checked && !radio2.checked) {
        errors.push("Please select a preferred method of contact.");
        radio1.classList.add("error");
        radio2.classList.add("error");
    }

    // checking to see if there is anything in the comments box
    if (comments.value === "") {
        errors.push("Please leave a comment.");
        comments.classList.add("error");
    }
  
    // check the amount of errors, if there are errors, display them in the error container
    if (errors.length > 0) {
        const errorList = document.querySelector("#errorList");
        errorList.classList.remove("hide");
        errors.forEach((error) => {
          const li = document.createElement("li");
          li.innerHTML = error;
          errorList.appendChild(li);
        });
    }
};

// event listener for form
document.addEventListener("submit", isFormValid);

// reset form
const resetButton = document.getElementById("submit");
resetButton.addEventListener("click", () => {
    form.reset();
    errorContainer.innerHTML = "";
    fullName.classList.remove("error");
    phone.classList.remove("error");
    email.classList.remove("error");
    preferredMethodInputs[0].classList.remove("error");
    preferredMethodInputs[1].classList.remove("error");
    comments.classList.remove("error");
});


// light/dark mode functions
function toggleImage() {
    let img = document.getElementById("image");
    
    if (img.src.endsWith("sunny.png")) {
        img.src = "images/lou-pines-logo.png";
    } else {
        img.src = "images/sunny.png";
    }
    return false;
}
    
function toggleMode() {
    let body = document.getElementsByTagName("body")[0];
    
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
}

// discount generator
function randomNum() {
    let randNum = Math.floor(Math.random() * 10) + 1;
    let numInput = document.getElementById("userDisplay");
    let userInput = Number(numInput.value);
    let output = document.getElementById("message");

    if (randNum === 0 || userInput === 0 || userInput === "") {
        output.innerHTML = "Please enter a number between 1 and 10.";
    } else if (randNum === userInput) {
        output.innerHTML = `You've won a $${userInput} discount!`;
    } else {
        output.innerHTML = `Sorry no discounts for you. Try again!`;
    }
    event.preventDefault();
    output = "";
}

// event listener for random number generator
document.getElementById("submitButton").addEventListener("click", randomNum);

















/*------javaforrecipeslider-----*/
const postActionsControllers = document.querySelectorAll(
    ".post-actions-controller"
  );
  
  postActionsControllers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const postActionsContent = document.getElementById(targetId);
  
      if (postActionsContent) {
        const isVisible = postActionsContent.getAttribute("data-visible");
  
        if (isVisible === "false") {
          postActionsContent.setAttribute("data-visible", "true");
          postActionsContent.setAttribute("aria-hidden", "false");
          btn.setAttribute("aria-expanded", "true");
        } else {
          postActionsContent.setAttribute("data-visible", "false");
          postActionsContent.setAttribute("aria-hidden", "true");
          btn.setAttribute("aria-expanded", "false");
        }
      }
    });
  });
  
  function handleClickOutside(event) {
    postActionsControllers.forEach((btn) => {
      const targetId = btn.getAttribute("data-target");
      const postActionsContent = document.getElementById(targetId);
  
      if (postActionsContent && postActionsContent.getAttribute("data-visible") === "true") {
        if (!postActionsContent.contains(event.target) && event.target !== btn) {
          postActionsContent.setAttribute("data-visible", "false");
          postActionsContent.setAttribute("aria-hidden", "true");
          btn.setAttribute("aria-expanded", "false");
        }
      }
    });
  }
  
  document.addEventListener("click", handleClickOutside);
  
  postActionsControllers.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
  
  const likeBtns = document.querySelectorAll(".post-like");
  
  likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener("click", () => {
      if (likeBtn.classList.contains("active")) {
        likeBtn.classList.remove("active");
      } else {
        likeBtn.classList.add("active");
      }
    });
  });
  
  // Swiper
  
  var swiper = new Swiper(".swiper", {
    grabCursor: true,
    speed: 400,
    mousewheel: {
      invert: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      900: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  
  //swiper 
  
  var swiper = new Swiper(".swiper" , {
    grabCursor:true,
    noSwipping:true,
    freeMode:false,
    speed:500,
    scrollbar:{
        el:".swiper-scrollbar",
        draggable:true,
    },
    520:{
    slidesPerView:1,
    spaceBetween:10,
    },
    960:{
        slidesPerView:1,
        spaceBetween:10,
    },
    1280:{
        slidesPerView:1,
        spaceBetween:10,
        },
  });