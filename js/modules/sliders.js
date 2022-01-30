function sliders () {

    let slideIndex = 1,
    dir ='horizontal',
    paused = false;

    // const items = document.querySelectorAll(slides);
    const items = document.querySelectorAll('.slider-item');

        function showSlides(n) {
            if(n > items.length) {
                slideIndex = 1;
            }
            if(n < 1){
                slideIndex = items.length;
            }
            items.forEach(item => {
                // item.classList.add("animated");
                item.style.display = "none";
            });

            items[slideIndex - 1].style.display = 'block';
        }

        showSlides(slideIndex);

        function plusSlides(n){
            showSlides(slideIndex += n);
        }

        try {
            const prevBtn = document.querySelector('.main-prev-btn'),
                nextBtn = document.querySelector('.main-next-btn');

            prevBtn.addEventListener('click', () => {
                plusSlides(-1);
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');
            });
            nextBtn.addEventListener('click',() => {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');
            });
        }catch(e){}

        function activateAnimation() {
            if(dir === 'horizontal'){
                paused = setInterval(function() {
                    plusSlides(1);
                    items[slideIndex - 1].classList.remove('slideInRight');
                    items[slideIndex - 1].classList.add('slideInLeft');
                },3000);
            }
        }

        activateAnimation();

        items[0].parentNode.addEventListener('mouseenter', () => {
            clearInterval(paused);
        });

        items[0].parentNode.addEventListener('mouseleave', () => {
            activateAnimation();
        });

}

export default sliders();