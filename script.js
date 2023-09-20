function handleSubmit(){
       // Get the values of the "Email" and "Confirm email" input fields
       var emailValue = document.getElementById("email").value;
       var confirmEmailValue = document.getElementById("confirmemail").value;
   
       // Check if the "Email" and "Confirm email" values match
       if (emailValue === confirmEmailValue) {
         alert("You did it!!");
         return true; // Allow the form submission
       } else {
         alert("Emails are different.");
         return false; // Prevent the form submission
       }
     }
