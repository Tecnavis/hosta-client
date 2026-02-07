
document.addEventListener('click',e=>{
  const w=e.target.closest('.wishlist');
  if(!w)return;
  w.classList.toggle('active');
});
