window.onload = function() {
    // Function to handle form submission
    document.getElementById("cdpForm").onsubmit = function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve form values
        var name = document.getElementById("name").value;
        var uid = document.getElementById("uid").value;
        var phone = document.getElementById("phone").value;
        var gender = document.getElementById("gender").value;

        // Initialize CDP and report data
        gigya.cdp.init({
            apiDomain: 'EU5',
            bUnitId: '4_2arKfv5bsPsK9ODVBhCJeA',
            appId: 'HMLzfJgAXSgOndB4OuRQRw'
        })
        .then(function(sdk) {
            window.CDP = sdk;
            // Report data to CDP
            CDP.report('GetCustomerList', {
                "name": name,
                "uid": uid,
                "phone": phone,
                "gender": gender
            });
            alert("Data reported successfully!");
        })
        .catch(function(error) {
            console.error('CDP initialization error:', error);
            alert("Error reporting data to CDP.");
        });
    };
};
