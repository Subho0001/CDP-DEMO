window.onload = function() {
    // Function to handle form submission
    document.getElementById("cdpForm").onsubmit = function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve form values
        var nameInput = document.getElementById("name");
        var uidInput = document.getElementById("uid");
        var name = nameInput ? nameInput.value : "";
        var uid = uidInput ? uidInput.value : "";

        var address1 = document.getElementById("address1").value;
        var address2 = document.getElementById("address2").value;
        var city = document.getElementById("city").value;
        var country = document.getElementById("country").value;
        var postalcode = document.getElementById("postalcode").value;
        var state = document.getElementById("state").value; 
        var deliverymode = document.getElementById("deliverymode").value; 

        console.log({
            "deliveryMode": "standard",
            "code": "ORDER124",
            "user_uid": "abuser@t.com",
            "currencyIso": "USD",
            "deliveryAddress": {
              "line1": "123 Main Street",
              "country_name": "United States",
              "firstName": "John",
              "lastName": "Doe",
              "region_isocode": "CA",
              "town": "Los Angeles",
              "addressId": "ad",
              "phone": "+1234567890",
              "postalCode": "90001",
              "country_isocode": "india",
              "email": "john123.doe@example.com",
              "line2": "Apt 101"
            },
            "user_name": "johndoe123",
            "entries": [
              {
                "p_price": 10.99,
                "p_name": "Product A",
                "quantity": 2,
                "entryNumber": 1,
                "p_code": "A123",
                "entrytotalPrice": 21.98
              }
            ],
            "totalPrice": 37.48
    });
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
            CDP.report('CheckOutEvent', {
                    "deliveryMode": "standard",
                    "code": "codeid",
                    "user_uid": "abuser@t.com",
                    "currencyIso": "USD",
                    "deliveryAddress": {
                      "line1": "123 Main Street",
                      "country_name": "india",
                      "firstName": "John",
                      "lastName": "Doe",
                      "region_isocode": "CA",
                      "town": "Los Angeles",
                      "addressId": "add",
                      "phone": "5634567890",
                      "postalCode": "90001",
                      "country_isocode": "IN",
                      "email": "john123.doe@example.com",
                      "line2": "Apt 101"
                    },
                    "user_name": "johndoe123",
                    "entries": [
                      {
                        "p_price": 10.99,
                        "p_name": "Product A",
                        "quantity": 2,
                        "entryNumber": 1,
                        "p_code": "abcde",
                        "entrytotalPrice": 21.98
                      }
                    ],
                    "totalPrice": 37.48
            });
            alert("Data reported successfully!");
        })
        .catch(function(error) {
            console.error('CDP initialization error:', error);
            alert("Error reporting data to CDP.");
        });
    };
};
