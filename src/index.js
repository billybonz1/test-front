document.querySelector('.mobile-more').addEventListener("click", function(e){
  e.preventDefault();
  document.querySelector('.main-page-banner').style.maxHeight = 'unset';
  this.style.display = 'none';
});


document.querySelectorAll('.ic-bottom a').forEach((el) => {
  el.addEventListener("click", function(e){
    e.preventDefault();
    el.nextElementSibling.classList.toggle('block');
  });
});
