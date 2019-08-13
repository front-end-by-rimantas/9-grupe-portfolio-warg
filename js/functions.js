"use strict";

//HEADER
// on scroll
function functionToCallOnScroll() {
    updateHeader();
    updateBackToTopVisibility();
    updateActiveHeaderMenu();
}

//HERO

//ABOUT ME

//SERVICES

//MY WORK
function generateGallery( data ) {
    let HTML = '',
        tagsHTML = '',
        workHTML = '';

    // filtras
        // elementai: All + unikalus tag'ai
    uniqueWords(data, 'tags').forEach( tag => {
        tagsHTML += `<div class="item">
        <a>
        ${tag}
        </a>
                                </div>`;
    });
        
    // darbu sarasas
        // max 6 elementai
    for ( let i=0; i<data.length; i++ ) {
        workHTML += `<div class="item" style="background-image: url(img/portfolio/${data[i].img});">
                        <div class="content">
                            <div class="texts">
                                <h4>${data[i].title}</h4>
                                <div class="tags">${data[i].tags.join(', ')}</div>
                            </div>
                        </div>
                    </div>`;
    }
    
    HTML = `<div class="filter">
                <div class="item">All</div>
                ${tagsHTML}
            </div>
            <div class="list">
                ${workHTML}
            </div>`;

    return HTML;
}
//MY BLOGS

//CONTACT

//FOOTER
