let scrollLeftButton = document.getElementsByClassName('left');
let scrollRightButton = document.getElementsByClassName('right');
// Interval var for continious sidescrolling effects on content galleries
let myInterval;
// Time out var to add a delay when closing dropdown menus
let myTimeOut;
let searchBtn = document.getElementById('search');
let bellBtn = document.getElementById('bell');
let topRight = document.getElementById('user');
let bellDropdown = document.getElementById('bell-drop-down');
let userDropdown = document.getElementById('user-drop-down');
let userBtn = document.getElementById('user-btn');

//creates an event listener for each content gallery left button, that scrolls the gallery left once hovered
Array.prototype.forEach.call(scrollLeftButton, function(obj){
    obj.addEventListener('mouseover', () => {
        let i = obj.id;
        i = i.charAt(i.length - 1);
        let arr = document.getElementsByClassName('movie-container');
        myInterval = setInterval (() => {
            (arr[i].scrollLeft += 1), 100});
    });

    obj.addEventListener('mouseout', () => {
        clearInterval(myInterval);
    });

});

//creates an event listener for each content gallery right button, that scrolls the gallery right once hovered
Array.prototype.forEach.call(scrollRightButton, function(obj) {
    obj.addEventListener('mouseover', () => {
        let i = obj.id;
        i = i.charAt(i.length - 1);
        let arr = document.getElementsByClassName('movie-container');
        myInterval = setInterval (() => {
            (arr[i].scrollLeft -= 0.5), 100});
    });

    obj.addEventListener('mouseout', () => {
        clearInterval(myInterval);
    });

});

// searchbar animation
searchBtn.addEventListener('click', () => {
    let ico = document.createElement('input');
    ico.type = 'text';
    ico.placeholder = 'Títulos, gente e gêneros';
    ico.id = 'search-bar';
    topRight.removeChild(searchBtn);
    topRight.insertBefore(ico, topRight.firstChild);
    ico.focus();
    ico.addEventListener('blur', () => {
        ico.id = 'search-bar-fade-out'
        setTimeout(() => {
            topRight.removeChild(ico);
            topRight.insertBefore(searchBtn, topRight.firstChild);
            ico.id = 'search-bar';
            ico.display = 'block'
        }, 2000);
    });
});

//activates the bell dropdown menu after hovering over the bell
bellBtn.addEventListener('mouseenter', () => {
    clearTimeout(myTimeOut);
    //closes the neighbour dropdown menu if open
    let nearDropdown = getComputedStyle(userDropdown).getPropertyValue('display');
    if (nearDropdown == 'block') {
        userDropdown.style.display = 'none';
    }
    bellDropdown.style.display = 'block';
});

// closes the bell dropdown menu once the mouse is not on the bell button
// Has a .5 second delay.
bellBtn.addEventListener('mouseout', () => {
    myTimeOut = setTimeout(() => {
        bellDropdown.style.display = 'none';
    }, 500);
});

//Stops the bell dropdown menu from closing(previous function), if the user is hovering the menu. 
bellDropdown.addEventListener('mouseover', () => {
    clearTimeout(myTimeOut);
});

//Closes the bell dropdown menu if the mouse leaves the menu area.
bellDropdown.addEventListener('mouseleave', () => {
    myTimeOut = setTimeout(() => {
        bellDropdown.style.display = 'none';
    }, 500);
});

//activates the user dropdown menu after hovering over the user icon.
userBtn.addEventListener('mouseover', () => {
    clearTimeout(myTimeOut);
    //closes the neighbour dropdown menu if open
    let nearDropdown = getComputedStyle(bellDropdown).getPropertyValue('display');
    if (nearDropdown == 'block') {
        bellDropdown.style.display = 'none';
    }
    userDropdown.style.display = 'block';
});

// closes the user dropdown menu once the mouse is not on the user icon.
// Has a .5 second delay.
userBtn.addEventListener('mouseout', () => {
    myTimeOut = setTimeout(() => {
        userDropdown.style.display = 'none';
    }, 500);
});

//Stops the user dropdown menu from closing(previous function), if the user is hovering the menu. 
userDropdown.addEventListener('mouseover', () => {
    clearTimeout(myTimeOut);
});

//Closes the dropdown menu if the mouse leaves the menu area.
userDropdown.addEventListener('mouseleave', () => {
    myTimeOut = setTimeout(() => {
        userDropdown.style.display = 'none';
    }, 500);
});

// close both dropdown menus if the user scrolls down the document.
document.addEventListener('scroll', () => {
    bellDropdown.style.display = 'none';
    userDropdown.style.display = 'none';
});





