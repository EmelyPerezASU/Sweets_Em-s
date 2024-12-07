

"use strict"; 

/*--contact----*/
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


  /*----shop-*/

/*---------------------------------------------------notes------------------------
const shop = function (){
    
}[
    {
        name:'Pack of guava macaroons',
        price: 19.99,
        quantity:0,
        productId:pn1,
        image: 'images/guavaPasteMac.jpg'
    },

    {
        name:'Ube Cupcakes',
        price:25.00,
        productId:pn2, 
        image:'images/FigCupcake.jpg'
    },

    {
        name:'Fig Cupcakes',
        price:5.99,
        productId:pn3,
        image:'images/FigCupcake.jpg'
    }
]


const cart =[]; 

    cart = [];
    
   
    // Add to cart
    obj.addItemToCart = function(pn1,pn2,pn3) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count ++;
          saveCart();
          return;
        }
      }
      var item = new Item(pn1,pn2,pn3);
      cart.push(item);
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function(pn1,pn2,pn3) {
      for(var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(pn1,pn2,pn3) {
        for(var item in cart) {
          if(cart[item].name === name) {
            cart[item].count --;
            if(cart[item].count === 0) {
              cart.splice(item, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(pn1,pn2,pn3) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }
  
    // Clear cart
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Count cart 
    obj.totalCount = function() {
      var totalCount = 0;
      for(var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }
  
    // Total cart
    obj.totalCart = function() {
      var totalCart = 0;
      for(var item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
    }
  
    // List cart
    obj.listCart = function() {
      var cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
  */
  
  


    const products = [
        {
            id: 'pn1',
            name: 'Pack of guava macaroons',
            price: 19.99
        },
        {
            id: 'pn2',
            name: '4 Ube Cupcakes',
            price: 25.00
        },
        {
            id: 'pn3',
            name: 'Fig Cupcake',
            price: 5.99
        }
    ];
    
    // Cart data structure
    let cart = {
        items: [],
        subtotal: 0,
        tax: 0,
        shipping: 0,
        total: 0
    };
    
    // Function to add product to cart
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        
        if (product) {
            cart.items.push(product);
            updateCart();
        }
    }
    
    // Function to update cart details
    function updateCart() {
        const itemsList = document.getElementById('itemsList1');
        const subtotalElement = document.getElementById('subtotal1').querySelector('span');
        const taxElement = document.getElementById('tax1').querySelector('span');
        const shippingElement = document.getElementById('shipping1').querySelector('span');
        const totalElement = document.getElementById('total1').querySelector('span');
    
        // Clear the current cart display
        itemsList.innerHTML = '';
    
        // Update cart items
        if (cart.items.length > 0) {
            cart.items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                itemsList.appendChild(li);
            });
    
            // Calculate subtotal
            cart.subtotal = cart.items.reduce((acc, item) => acc + item.price, 0);
        } else {
            itemsList.innerHTML = '<li>Your Cart is Empty</li>';
        }
    
        
        cart.tax = cart.subtotal * 0.08;
        cart.shipping = 5.00;
        cart.total = cart.subtotal + cart.tax + cart.shipping;
    
        // Update the displayed values
        subtotalElement.textContent = `$${cart.subtotal.toFixed(2)}`;
        taxElement.textContent = `$${cart.tax.toFixed(2)}`;
        shippingElement.textContent = `$${cart.shipping.toFixed(2)}`;
        totalElement.textContent = `$${cart.total.toFixed(2)}`;
    }
    
    // Event listeners for the "Add To Cart" buttons
    document.getElementById('pn1').addEventListener('click', () => addToCart('pn1'));
    document.getElementById('pn2').addEventListener('click', () => addToCart('pn2'));
    document.getElementById('pn3').addEventListener('click', () => addToCart('pn3'));
    
    // Checkout button functionality (optional)
    document.getElementById('checkout1').addEventListener('click', () => {
        if (cart.items.length > 0) {
            alert('Proceeding to checkout!');
        
        } else {
            alert('Your cart is empty!');
        }
    });










// light/dark mode functions
function toggleImage() {
    let img = document.getElementById("image");
    
    if (img.src.endsWith("")) {
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

