const callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {
        const phoneNumber = prompt(this.message);
        return (phoneNumber);

    },
    showDeferredPrompt(ms) {
        setTimeout(this.showPrompt, ms)

    }
};
callbackPrompt.showDeferredPrompt();





export { callbackPrompt }