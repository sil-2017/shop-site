function burger() {
    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.nav-r-hamburger ul');
    let nav = document.querySelector('.nav');

    hamburger.addEventListener('click', function (e){
        // hamburger.classList.toggle('isactive');
        if (e.target.classList.contains('hamburger')){
            this.classList.add('isactive');
            menu.style.transform = 'translateX(0)';
            nav.style.height ="120px";
        }else{
            this.classList.remove('isactive');
            menu.style.transform = 'translateX(-110%)';
            nav.style.height ="60px";
        }
      });
   
  }
  export default  burger();
  