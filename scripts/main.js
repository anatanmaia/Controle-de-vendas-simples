var btnEl = document.querySelector('#addSale');

function openPopup() {
    btnEl.addEventListener('click', ()=> {
        let container = document.querySelector('#app .container');
        let popup = document.querySelector('#app .popup');

        container.style.display = 'none';
        popup.style.display= 'block';
    });
}

openPopup();