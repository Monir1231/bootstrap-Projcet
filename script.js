const animation = ScrollReveal({
    distance : '30px',
    duration : 1500,
    delay : 400,
    reset : true
})

animation.reveal('.hero-content,.hero-img,.about-img,.about-content,.portfolio-content,.portfolio-img,.main-cards,.testimonials-content,.testimonials-img,.instagram-common-content,.instagram-img,.question-content-main,.address-content', {
    delay : 300,
    origin : 'bottom'
})
