const showNewUser = () => {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((userData) => {
      const user = userData.results[0];


      const userGender = ("Gender:", user.gender);
      const userPassword = ("password:", user.login.password);
      const userUserName = ("password:", user.login.username);
      const userFirstName = ("First Name:", user.name.first);
      const userLastName = ("Last Name:", user.name.last);
      const userEmail = ("Email:", user.email);
      const userCountry = ("Country:", user.location.country);

      $city.value = userCountry;
      $email.value = userEmail;
      $password.value = userPassword;
      $fullName.innerHTML = `${userFirstName} ${userLastName}`;
      $username.innerHTML = `${userUserName}@`;

      if (userGender === "male") {
        document.querySelector(".user-avatar").src = "public/images/male.png";
      } else {
        document.querySelector(".user-avatar").src = "public/images/female.png";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

showNewUser();