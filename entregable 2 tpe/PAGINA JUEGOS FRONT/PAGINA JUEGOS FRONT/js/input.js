const input = document.getElementById('buscador');

input.addEventListener('focus', function() {
    input.setAttribute('placeholder', '');
});

input.addEventListener('blur', function() {
    input.setAttribute('placeholder', 'Que buscas..?');
});