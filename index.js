window.onload = function() {
    // Function to handle form submission
    document.getElementById("cdpForm").onsubmit = function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve form values
        var nameInput = document.getElementById("name");
        var uidInput = document.getElementById("uid");
        var name = nameInput ? nameInput.value : '';
        var uid = uidInput ? uidInput.value : '';
        var category = document.getElementById("category").value;
        var brand = document.getElementById("brand").value;
        /* var phone = document.getElementById("phone").value;
        var gender = document.getElementById("gender").value;
        var nationality = document.getElementById("nationality").value; */

        // Initialize CDP and report data
        gigya.cdp.init({
            apiDomain: 'EU5',
            bUnitId: '4_2arKfv5bsPsK9ODVBhCJeA',
            appId: 'HMLzfJgAXSgOndB4OuRQRw'
        })
        .then(function(sdk) {
            window.CDP = sdk;
            // Report data to CDP
            CDP.report('Get Anonymous Customer', {
                "name": name,
                "uid": uid,
                "category": category,
                "brand": brand
                /* "phone": phone,
                "gender": gender,
                "nationality": nationality */
            });
            alert("Data reported successfully!");
        })
        .catch(function(error) {
            console.error('CDP initialization error:', error);
            alert("Error reporting data to CDP.");
        });
    };
};
