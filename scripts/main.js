var openDetails = document.querySelectorAll('.sale a');
var closeDetails = document.querySelector('#closeDetails');

var container = document.querySelector('#sales');
var detailedEl = document.querySelector('#details');

function openElement() {

    for (btnOpen of openDetails) {
        btnOpen.addEventListener('click', () => {
            container.style.display = 'none';
            detailedEl.style.display = 'block';
        });
    }
}

openElement();

function closeElement() {
    closeDetails.addEventListener('click', ()=> {
        detailedEl.style.display = 'none';
        container.style.display = 'block';
    });
}

closeElement();