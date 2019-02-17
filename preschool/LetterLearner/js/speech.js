(function(){

    window.speak = (text, speed) => {
        var msg = new SpeechSynthesisUtterance(text);
        msg.rate = speed || 1;
        speechSynthesis.speak(msg);
    }

})();
