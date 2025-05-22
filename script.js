const tg = window.Telegram.WebApp;
tg.expand(); // Разворачивает WebView на весь экран

const user = tg.initDataUnsafe?.user;

if (user) {
  document.getElementById('username').textContent = user.first_name;
  console.log("Пользователь:", user);

  // 👇 Отправляем initData на backend
  fetch("https://pachakutak.github.io/Geotour/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ initData: tg.initData })
  })
    .then(res => res.json())
    .then(data => {
      console.log("Ответ от сервера:", data);
    })
    .catch(err => {
      console.error("Ошибка авторизации:", err);
    });

} else {
  console.log("Нет данных о пользователе");
}
