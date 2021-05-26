console.log('sample script');
// document.title = 'dinith';
// console.log(document.title);
const observer = new IntersectionObserver(entries => {
  
   entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      console.log('visible');
      entry.target.classList.add('footer-animation');
    }
    else {
        entry.target.classList.remove('footer-animation');
    }
  });
  });
  
  // Tell the observer which elements to track
  observer.observe(document.querySelector('.footerTextSample'));