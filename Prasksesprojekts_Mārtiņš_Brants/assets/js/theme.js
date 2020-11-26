var fixedHeader = function(){
    window.addEventListener('scroll', checkHeader);
    var checkHeader = _.throttle(() => { }, 300);
    let scrollPosition = Math.round(window.scrollY);
    if (scrollPosition > 100){
  document.querySelector('header').classList.add('sticky');
     }
  else {
  document.querySelector('header').classList.remove('sticky');
  }
  };