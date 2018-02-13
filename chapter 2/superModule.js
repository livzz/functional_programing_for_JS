var superModule = (function() {
    var secret = "supersecretkey"; // Private
    var passcode = "nuke"; // Private

    function getSecret() {
        console.log(secret);
    }

    function getPassCode() {
        console.log(passcode);
    }
    return {
        getSecret() {
            console.log(secret);
        },
        getPassCode() {
            console.log(passcode);
        }
    };
})();
superModule.getSecret();
superModule.getPassCode();