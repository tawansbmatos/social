'use strict';

const imagens = [
    { 'id': '1', 'url': 'img/img-3.jpg' },
    { 'id': '2', 'url': 'img/img-2.jpg' },
    { 'id': '3', 'url': 'img/img-1.jpg' },

]

const container = document.querySelector('#container__img')

const loadImagens = ( imagens, container ) => {
    imagens.forEach(imagens => {
        container.innerHTML = `
        <div class="conteudo__imagens" id="container__img">
            <img src="img/img-3.jpg" alt="">
            <img src="img/img-2.jpg" alt="">
            <img src="img/img-1.jpg" alt="">
        </div>
        `
    });
}


loadImagens( imagens, container );