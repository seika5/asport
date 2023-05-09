var observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('pro-animation');
      return;
      }

      entry.target.classList.remove('pro-animation');      
  });
});

var pro = document.querySelectorAll('.pro');
for (let i = 0; i < pro.length; i++) {
  observer.observe(pro[i]);
}