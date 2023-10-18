

function validate() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    const usernameRegex = /^[a-zA-Z\- ]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true;

    try {

        if (username.length === "") {
            throw new Error("Please enter a username.");
          } else if (!usernameRegex.test(username)) {
            throw new Error("Please enter a valid username.");
          }

          if (email.length === "") {
            throw new Error("Email address is required");
          } else if (!emailRegex.test(email)) {
            throw new Error("Please enter a valid email address.");
          }

    } catch (error) {
        alert(error.message);
        isValid = false;
    } finally {

    }

    if (isValid) {
        window.location.href = "finalproject.html";
        alert("submitted Successfully");
      }

      return isValid;
}