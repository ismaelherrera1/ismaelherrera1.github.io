const flags = document.querySelectorAll('.flag');

flags.forEach(flag => {
    flag.addEventListener('click', function() {
        flags.forEach(f => f.classList.remove('selected'));

        this.classList.add('selected');
    });
});