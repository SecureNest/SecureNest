    // Initialize intlTelInput
    var phoneInput = document.querySelector("#ph_no");
    var iti = window.intlTelInput(phoneInput, {
        // Any initial options you want, refer to documentation
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // just for formatting/placeholders etc
    });

    // Store the full number whenever there's an input
    phoneInput.addEventListener("countrychange", function() {
        document.getElementById("full_ph_no").value = iti.getNumber();
    });
    phoneInput.addEventListener("keyup", function() {
        document.getElementById("full_ph_no").value = iti.getNumber();
    });


function SendMail()
{
    var email = document.getElementById("email_id").value;
    var params = {
        from_name : document.getElementById("full_name").value,
        email_id : email,
        message : document.getElementById("message").value,
        ph_no : document.getElementById("full_ph_no").value,
    }
        // Regular expression for email validation
        var emailRegEx = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegEx.test(email)) 
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a valid email!',
                confirmButtonColor: '#56ABD1',
            });
        } 
        else {
                emailjs.send('service_rj7pfls','template_knmsimg',params).then(function (res){
                    Swal.fire({
                        icon: 'success',
                        title: 'Sent Successfully!',
                        text: 'We have received your Message and will get back to you shortly.',
                        confirmButtonColor: '#56ABD1',
                    })
        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again later.',
                confirmButtonColor: '#56ABD1',
            });
        });
    }
    console.log("Phone number is: " + params.ph_no)
}