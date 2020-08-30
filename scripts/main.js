var openDetails = document.querySelector('#openDetails');
var closeDetails = document.querySelector('#closeDetails');

var container = document.querySelector('#content-container .container');
var detailedEl = document.querySelector('.detailed-sale_container');

function openElement() {
    openDetails.addEventListener('click', ()=> {
        container.style.display = 'none';
        detailedEl.style.display = 'block';
    });
}

openElement();

function closeElement() {
    closeDetails.addEventListener('click', ()=> {
        detailedEl.style.display = 'none';
        container.style.display = 'block';
    });
}

closeElement();