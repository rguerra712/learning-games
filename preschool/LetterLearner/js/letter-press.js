(function() {
    document.addEventListener('keypress', function (e) {
        const key = e.key;
        const currentLetter = document.getElementById('currentLetter');
        const isUpperCase = document.getElementById('isUpperCase').checked;
        currentLetter.innerHTML = isUpperCase ? key.toUpperCase() : key.toLowerCase();
        const prefix = key.length === 1 && key.match(/[a-zA-Z]/) ? getPrefix(isUpperCase) : '';
        if (prefix) {
            window.speak(prefix, 1);
        }
        window.speak(key, .75);
    });

    function getPrefix(isUpperCase) {
        const prefixChoiceSelector = document.getElementById('casePrefix');
        const prefixChoice = prefixChoiceSelector[prefixChoiceSelector.selectedIndex].value;
        if (isUpperCase) {
            switch (prefixChoice) {
                case 'bigAndLittle':
                    return 'big';
                case 'upperAndLower':
                    return 'upper case';
                default:
                    return '';
            }
        } else {
            switch (prefixChoice) {
                case 'bigAndLittle':
                    return 'little';
                case 'upperAndLower':
                    return 'lower case';
                default:
                    return '';
            }
        }
    }
})();