function submitData(name, email) {
  const formData = {
    name: name,
    email: email
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(data => {
      // Append the new id to the DOM
      document.body.innerHTML += `<p>${data.id}</p>`;
    })
    .catch(error => {
      // Append the error message to the DOM
      document.body.innerHTML += `<p>${error.message}</p>`;
    });
}
