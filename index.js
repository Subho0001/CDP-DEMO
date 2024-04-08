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
            "name": name,
            "deliverymode": deliverymode,
            "address1": address1,
            "city": city,
            "uid": uid,
            "address2": address2,
            "state": state,
            "postalcode": postalcode,
            "country": country
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
            CDP.report('CheckOut Event', {
                    "deliveryMode": "standard",
                    "code": "ORDER123",
                    "user_uid": "user123@t.com",
                    "currencyIso": "USD",
                    "deliveryAddress": {
                      "line1": "123 Main Street",
                      "country_name": "United States",
                      "firstName": "John",
                      "lastName": "Doe",
                      "region_isocode": "CA",
                      "town": "Los Angeles",
                      "addressId": "addr123",
                      "phone": "+1234567890",
                      "postalCode": "90001",
                      "country_isocode": "US",
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
                      },
                      {
                        "p_price": 15.5,
                        "p_name": "Product B",
                        "quantity": 1,
                        "entryNumber": 2,
                        "p_code": "B456",
                        "entrytotalPrice": 15.5
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
