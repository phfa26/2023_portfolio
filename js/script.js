//progress-bar on scroll//
const scrollProgressElement = document.querySelector('#scroll-progress');

function scrollProgress() {
  const PageTotalHeight = document.body.scrollHeight;
  const currentDistantFromTop = document.documentElement.scrollTop;

  const windowHeight = document.documentElement.clientHeight;

  const scrolledPercentage = (currentDistantFromTop / (PageTotalHeight - windowHeight)) * 100;

  scrollProgressElement.style.width = Math.round(scrolledPercentage) + '%';
}

document.addEventListener('scroll', scrollProgress);


//back to top button scroll//

window.addEventListener('scroll', function(){
  let scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop(){
  window.scrollTo(0, 0);
}


//activate nav-links on click and scroll//

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .nav-container ul li');

window.addEventListener('scroll', ()=> {
  let current = '';
  
  sections.forEach (section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(scrollY >= (sectionTop - sectionHeight/3)){
      current = section.getAttribute('id');
    }
  })
  navLi.forEach( li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active');
    }
  })
})

//fade home on scroll //
const headerHome = document.getElementById('home');
    window.addEventListener('scroll', function(){
      headerHome.style.opacity = 1 -+ window.pageYOffset/1000+'';
      headerHome.style.backgroundPositionY =+ window.pageYOffset+'px';
    })

const headerContent = document.getElementById('homepage');
    window.addEventListener('scroll', function(){
      headerContent.style.opacity = 1 -+ window.pageYOffset/500+'';
    })


//adding smooth scroll to only a few elements //



