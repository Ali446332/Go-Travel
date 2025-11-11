$(document).ready(function(){
  // Login
  $('#loginForm').submit(function(e){
    e.preventDefault();
    let user = $('#username').val().trim();
    let pass = $('#password').val().trim();
    if(!user || !pass){ alert('Enter username and password'); return; }
    sessionStorage.setItem('loggedUser', user);
    window.location.href = 'Home.html';
  });

  // Booking Form
  $('#bookingForm').submit(function(e){
    e.preventDefault();
    let name = $('#name').val().trim();
    let email = $('#email').val().trim();
    let dest = $('#destination').val();
    let date = $('#date').val();
    let trav = $('#travellers').val();
    if(!name || !email || !dest || !date || !trav){ alert('Fill all fields'); return; }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){ alert('Enter valid email'); return; }
    $('#popupMsg').text(`✅ Thank you, ${name}! Your trip to ${dest} on ${date} for ${trav} traveller(s) is confirmed.`).show();
    let bookings = JSON.parse(localStorage.getItem('bookings')||'[]');
    bookings.push({name,email,dest,date,trav});
    localStorage.setItem('bookings', JSON.stringify(bookings));
    this.reset();
  });

  // Logout
  $('.btn-logout').click(function(){
    sessionStorage.clear();
    window.location.href = 'index.html';
  });
});
$(document).on('click', '.btn-logout', function() {
  // Clear session & local data
  sessionStorage.clear();
  localStorage.removeItem('Bookings');

  // Confirmation alert
  alert("You have been logged out successfully!");

  // Redirect to login page
  window.location.href = "Home.html";

});
