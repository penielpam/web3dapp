document.getElementById("myForm").addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Your custom submission logic here
  // For example, you can use Fetch API to send the form data asynchronously
  const formData = new FormData(this);
  fetch(this.action, {
    method: this.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Handle the successful submission response
      console.log(data);
      // Redirect to index.html after successful submission
      window.location.href = "index.html";
    })
    .catch((error) => {
      // Handle errors during submission
      console.error("There was an error with form submission:", error);
      // Optionally, display an error message to the user
      // alert("Form submission failed. Please try again later.");
    });
});
