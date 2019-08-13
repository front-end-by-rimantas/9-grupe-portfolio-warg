"use strict";

//HEADER
// on scroll
function functionToCallOnScroll() {
    updateHeader();
    updateBackToTopVisibility();
    updateActiveHeaderMenu();
}
// hamburgerio
function updateHeader() {
    const headerVisibleHeight = Math.floor(window.innerHeight * 0.5);
    const header = document.getElementById('header');
    
    if ( window.scrollY >= headerVisibleHeight ) {
        // prideda klase "fixed"
        header.classList.add('fixed');
    } else {
        // pasaliname klase "fixed"
        header.classList.remove('fixed');
    }
    return;
}

function updateMenu() {
    const body = document.querySelector('body');
    const left = document.querySelector('#menu > .left');
    const right = document.querySelector('#menu > .right');
    
    if ( body.classList.contains('show-menu') ) {
        left.classList.remove('in');
        right.classList.remove('in');
        left.classList.add('out');
        right.classList.add('out');

        // laukiame kada isvazuos sonai, tada paslepiam visa menu
        setTimeout(function(){
            body.classList.remove('show-menu');
        }, 1000);
    } else {
        body.classList.add('show-menu');
        left.classList.remove('out');
        right.classList.remove('out');
        left.classList.add('in');
        right.classList.add('in');
    }
        
    return;
}

function generateMenu() {
    let HTML = '<a href="#" class="active">Home</a>';
    const links = document.querySelectorAll('body > *[data-menu]');

    links.forEach( linkElement => {
        const href = linkElement.getAttribute('id');
        const title = linkElement.dataset.menu;
        HTML += `<a href="#${href}">${title}</a>`;
    });

    return HTML;
}

function generateHeaderIcons( data ) {
    let HTML = '';

    data.forEach( item => {
        HTML += `<a href="${item.link}" class="fa fa-${item.icon}"></a>`;
    });

    return HTML;
}

function updateActiveHeaderMenu() {
    const links = document.querySelectorAll('body > *[data-menu]');
    let sectionTitles = [''];
    let sectionTopPositions = [0],
        scrollPosition = window.scrollY + parseInt(getComputedStyle(document.getElementById('header')).height);

    links.forEach( link => {
        sectionTitles.push(link.getAttribute('id'));
        sectionTopPositions.push(link.offsetTop);
    });
    
    let i = 0;
    while ( sectionTopPositions[i] < scrollPosition ) {
        i++;
    }
    i--;
    
    document.querySelectorAll('#menu .left a').forEach( link => {
        link.classList.remove('active');
        if ( link.getAttribute('href') === '#'+sectionTitles[i] ) {
            link.classList.add('active');
        }
    });

    return;
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
