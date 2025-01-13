// import Swal from 'sweetalert2';

//validating empty field
function check_empty() {
  if (document.getElementById('fBox').value == "" || document.getElementById('lBox').value == "" || document.getElementById('mailBox').value == "" || document.getElementById('msgBox').value == "") {
    // alert('Please fill out all required fields!')
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill in all required fields!',
      footer: '<a href>Why do I have this issue?</a>'
    });
  } else {
    // alert('Thanks! We will contact you within 24-48 hours.')
    Swal.fire({
      position:'top-end',
      icon: 'success',
      title: 'Thanks for reaching out!',
      text: 'Please give me 2-3 business days to get back with you.',
    });
  }
}

//function to display popup
function contact_show() {
  document.getElementById('popupContact').style.display = "block";
  document.getElementById('popupBackground').style.display = "block";
}
//function to hide popup
function contact_hide() {
  document.getElementById('popupContact').style.display = "none";
  document.getElementById('popupBackground').style.display = "none";
}
