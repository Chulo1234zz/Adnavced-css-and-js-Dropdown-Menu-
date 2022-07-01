'use strict';
let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');
menuToggle.addEventListener('click', function(){
    navigation.classList.toggle('active');
});