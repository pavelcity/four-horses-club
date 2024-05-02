
document.addEventListener('DOMContentLoaded', function () {
    let position = 0;
    let slidesToShow = 3;
    const slidesToScroll = 1;
    const autoScrollInterval = 4000;
    const container = document.querySelector('.sliderContainer');
    const track = document.querySelector('.sliderTrack');
    const items = document.querySelectorAll('.sliderItem');
    let prevBt = document.querySelector('.prev');
    let nextBt = document.querySelector('.next');
    let sliderCounter = document.querySelector('.arrowSlider span');

    const calculateItemWidth = () => {
        const containerWidth = container.clientWidth;
        if (containerWidth <= 1024) {
            slidesToShow = 1;
        } else {
            slidesToShow = 3;
        }
        return containerWidth / slidesToShow;
    };

    let movePosition = slidesToScroll * calculateItemWidth();

    items.forEach((item) => {
        item.style.minWidth = `${calculateItemWidth()}px`;
    });

    const autoScroll = () => {
        setInterval(() => {
            position -= movePosition;
            setPosition();
        }, autoScrollInterval);
    };

    autoScroll();

    nextBt.addEventListener('click', (e) => {
        e.preventDefault();
        position -= movePosition;
        setPosition();
    });

    prevBt.addEventListener('click', (e) => {
        e.preventDefault();
        position += movePosition;
        setPosition();
    });

    const setPosition = () => {
        if (position < -(items.length - slidesToShow) * calculateItemWidth()) {
            position = 0;
        }

        if (position > 0) {
            position = -(items.length - slidesToShow) * calculateItemWidth();
        }
        track.style.transform = `translateX(${position}px)`;

        let currentSlide = Math.abs(position) / calculateItemWidth() + 1;

        if (slidesToShow === 1 && window.innerWidth <= 1024) {
            currentSlide = Math.floor(currentSlide);
        } else {
            currentSlide += 2;
        }

        sliderCounter.textContent = `${currentSlide} / ${items.length}`;
    };

    setPosition();

});
