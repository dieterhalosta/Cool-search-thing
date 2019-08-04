const searchbtn = document.getElementById('search-btn');
const search = document.getElementById('search');
const tip = document.getElementById('tip');

var i = 0;
var message = 'Search it real good'
var speed = 100;

searchbtn.addEventListener('click', () => {
    search.style.width = '80%';
    search.style.paddingLeft = '60px';
    search.style.cursor = 'text';
    search.focus();

    //search.setAttribute('placeholder', 'Search it real good');
    typeWriter ();
})

function typeWriter() {
    if (i < message.length) {
        msg = search.getAttribute('placeholder') + message.charAt(i);
        search.setAttribute('placeholder', msg);
        i++;
        setTimeout(typeWriter, speed);
    }
}

search.addEventListener('keydown', () => {
    tip.style.visibility = 'visible';
    tip.style.opacity = '1';
})