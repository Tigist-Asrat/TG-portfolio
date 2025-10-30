var typed= new Typed(".text", {
    strings:["Frontend Developer", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });
  document.querySelectorAll('a[href^="#"').forEach((anchor) => {
    anchor.addEventListener("click", function(e)
    {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      
    });
    } );
     
  });
  
  document.getElementById("contact-form").addEventListener("submit", function (e){
    e.preventDefault();
    alert("thanks for your message");
    this.rest
  });
  document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    const navbar = document.getElementById('navbar');

    checkbox.addEventListener('click', function() {
        navbar.classList.toggle('active');  // Toggle the 'active' class
    });
});



