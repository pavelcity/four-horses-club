document.addEventListener('DOMContentLoaded', function () {
    let vPosition = 0
    let vSlidesToShow = 1
    let vSlidesToScroll = 1
    let vContainer = document.querySelector('.vasukiContainer')
    let vTrack = document.querySelector('.vasukiTrack')
    let vItems = document.querySelectorAll('.vasukiItem')
    let vItemsCount = vItems.length
    let vBtnPrev = document.querySelector('.sliderBtLeft')
    let vBtnNext = document.querySelector('.sliderBtRight')
    let vItemWidth = vContainer.clientWidth / vSlidesToShow
    let vMovePosition = vSlidesToScroll * vItemWidth

    vItems.forEach((item) => {
        item.style.minWidth = `${vItemWidth}px`;
    });

    vBtnNext.addEventListener('click', (e) => {
        e.preventDefault()
        let vItemsLeft = vItemsCount - (Math.abs(vPosition) + vSlidesToShow * vItemWidth) / vItemWidth
        
        vPosition -= vItemsLeft >= vSlidesToScroll ? vMovePosition : vItemsLeft * vItemWidth
        vSetPosition()
    })
 
    vBtnPrev.addEventListener('click', (e) => {
        e.preventDefault()
        let vItemsLeft = Math.abs(vPosition) / vItemWidth

        vPosition += vItemsLeft >= vSlidesToScroll ? vMovePosition : vItemsLeft * vItemWidth
        vSetPosition()
    })

    let vSetPosition = () => {
        vTrack.style.transform = `translateX(${vPosition}px)`
    }

});


