const worksSection = document.querySelector('.works');

if(worksSection) {
    const WorksSlider = new Swiper(worksSection, {
        slidesPerView: 'auto',
        spaceBetween: 150,
        centeredSlides: true,
        initialSlide: 1,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        breakpoints: {
            0: {
                spaceBetween: 20,
            },
            560: {
                spaceBetween: 80,
            },
            968: {
                spaceBetween: 150,
            }
        }
    })
}

//FAQ

const faq = document.querySelector('.faq');

if(faq) {
    const faqItems = faq.querySelectorAll('.faq-item');

    if(faqItems.length > 0) {

        faqItems.forEach((item, index) => {
            const answer = item.querySelector('.faq-answer')
            const question = item.querySelector('.faq-question')
            let answerHeight = answer.offsetHeight;
                        
            item.onclick = () => {
                for(let i = 0; i < faqItems.length; i++) {
                    if(i !== index) {
                        faqItems[i].classList.remove('active')
                        let question = faqItems[i].querySelector('.faq-question')
                        question.style.paddingBottom = '0px'
                    }
                }
                if(item.classList.contains('active')) {
                    item.classList.remove('active')
                    question.style.paddingBottom = '0px'
                }else {
                    item.classList.add('active')
                    question.style.paddingBottom = `${answerHeight}px`
                }
            }
        })
    }
}

//Animations

const AnimationItems = (scroll) => {
    const animationItems = document.querySelectorAll('.animation');

    let centerSize = scroll + (window.innerHeight * 0.9)
    animationItems.forEach(item => {

        if(centerSize >= item.getBoundingClientRect().top + document.documentElement.scrollTop) {
            item.classList.add('animation-active')
        }
    })
}

AnimationItems(0)
window.onscroll = () => AnimationItems(window.scrollY)