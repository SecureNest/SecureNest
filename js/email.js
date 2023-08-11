function SendMail()
{
    var email = document.getElementById("email_id").value;
    var params = {
        from_name : document.getElementById("full_name").value,
        email_id : email,
        message : document.getElementById("message").value,
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
                emailjs.send('service_q9p7zlm','template_knmsimg',params).then(function (res){
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
}