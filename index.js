window.onload = function() {
    // Function to handle form submission
    document.getElementById("cdpForm").onsubmit = function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve form values
        var nameInput = document.getElementById("name");
        var uidInput = document.getElementById("uid");
        var name = nameInput ? nameInput.value : "";
        var uid = uidInput ? uidInput.value : "";

        var pid = document.getElementById("pid").value;
        var q = document.getElementById("quantity").value;
        var price = document.getElementById("price").value; 
        var tp=price * q
        /* var gender = document.getElementById("gender").value;
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
            CDP.report('Add to Cart', {
                "name": name,
                "uid": uid,
                "pquantity": q,
                "price": price,
                "totalprice": tp,
                "pid": pid
            });
            alert("Data reported successfully!");
        })
        .catch(function(error) {
            console.error('CDP initialization error:', error);
            alert("Error reporting data to CDP.");
        });
    };
};
