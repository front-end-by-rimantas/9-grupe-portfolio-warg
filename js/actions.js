"use strict";

//HEADER
// on scroll
window.addEventListener('scroll', functionToCallOnScroll);

//HERO

//ABOUT ME

//SERVICES

//MY WORK

document.querySelector('#works_gallery .gallery').innerHTML = generateGallery( works );

document.querySelectorAll('.gallery > .filter > .item').forEach( item => {
    item.addEventListener('click', (event)=>{
        const tag = event.target.innerText;

        if ( tag === 'All' ) {
            document.querySelectorAll('.gallery > .list > .item').forEach( item => {
                item.style.display = 'inline-block';
            });
        } else {       
            document.querySelectorAll('.gallery > .list > .item').forEach( (item, index) => {
                 if ( works[index].tags.indexOf(tag) !== -1 ) {
                    item.style.display = 'inline-block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    });
})
//MY BLOGS

//CONTACT

//FOOTER
