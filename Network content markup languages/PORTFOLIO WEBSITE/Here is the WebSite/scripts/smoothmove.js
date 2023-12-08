function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.about-header');
  let elements1 = document.querySelectorAll('.aboutcard-photo');
  let elements2 = document.querySelectorAll('.aboutcard-description');
  let elements3 = document.querySelectorAll('.portfolio-header');
  let elements4 = document.querySelectorAll('.card');

  
  for (let elm of elements) {
    observer.observe(elm);
  }

  for (let elm of elements1) {
    observer.observe(elm);
  }
  
  for (let elm of elements2) {
    observer.observe(elm);
  }

  for (let elm of elements3) {
    observer.observe(elm);
  }

  for (let elm of elements3) {
    observer.observe(elm);

  }for (let elm of elements4) {
    observer.observe(elm);
  }