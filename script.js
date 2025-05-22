const tg = window.Telegram.WebApp;
tg.expand(); // Разворачивает WebView на весь экран

const user = tg.initDataUnsafe?.user;

if (user) {
  document.getElementById('username').textContent = user.first_name;
  console.log("Пользователь:", user);
} else {
  console.log("Нет данных о пользователе");
}
