let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;

//handle next button
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

//auto run thumbnail
let refreshInterval = setInterval(() => {
    next.click();
}, 3000);

//handle prev button
prev.onclick = function(){
    itemActive = itemActive-1;
    if(itemActive < 0){
        itemActive = countItem -1;
    }
    showSlider();
}
function showSlider(){
    //remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailRemoveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailRemoveOld.classList.remove('active');

    //item active variable

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    //clear auto run slider
    clearInterval(refreshInterval);
    let refreshInterval = setInterval(() => {
        next.click();
    }, 3000);

}

//click thumbnail

thumbnails.forEach((thumbnail , index) => {
    thumbnail.addEventListener('click', () =>{
        itemActive = index;
        showSlider();
    })
})