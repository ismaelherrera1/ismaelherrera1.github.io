const inputs = document.querySelectorAll('.input');

inputs.forEach(input => {
    const originalPlaceholder = input.placeholder;


    input.addEventListener('focus', () => {
        input.placeholder = '';
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.placeholder = originalPlaceholder;
        }
    });
});