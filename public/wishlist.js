
document.addEventListener('click', function(e){
  const btn = e.target.closest('.wishlist');
  if(!btn) return;
  const id = btn.getAttribute('data-id') || 'default';
  const key = 'wishlist_'+id;
  const active = localStorage.getItem(key) === '1';
  if(active){
    localStorage.removeItem(key);
    btn.classList.remove('active');
  }else{
    localStorage.setItem(key,'1');
    btn.classList.add('active');
  }
});
