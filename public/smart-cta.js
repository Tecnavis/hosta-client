
const ctaText = document.querySelector('.smart-cta button');
window.addEventListener('scroll',()=>{
  const y = window.scrollY;
  if(y<300) ctaText.innerText='View Rooms';
  else if(y<900) ctaText.innerText='Check Availability';
  else ctaText.innerText='Book Direct';
});
