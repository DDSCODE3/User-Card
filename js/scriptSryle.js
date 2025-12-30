// انتخاب ورودی‌ها
const $email = document.getElementById("email");
const $city = document.getElementById("city");
const $password = document.getElementById("password");
const $fullName = document.querySelector(".fullName");
const $username = document.querySelector(".username");

// API برای تغییر داده‌ها فقط توسط برنامه‌نویس
const UserData = {
  set({ email, city, password } = {}) {
    if (email) $email.value = email;
    if (city) $city.value = city;
    if (password) $password.value = password;
  },
  get() {
    return {
      email: $email.value,
      city: $city.value,
      password: $password.value,
    };
  },
};
