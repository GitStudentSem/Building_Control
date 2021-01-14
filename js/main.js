$(function () {
  // Скрипт модаьного окна
  // Для использования откопировать этот кусок, а так же
  // div class="modal" и файл _modal.sass
  $(".modal__open").click(function () {
    $(".modal").show();
  });
  $(".close").click(function () {
    $(".modal").hide();
  });
  // Бургер меню
  var burger = document.querySelector(".burger");
  burger.addEventListener("click", function () {
    document
      .querySelector(".header__list")
      .classList.toggle("header__list-visible");
  });
  // Бургер кнопка
  (function () {
    const burgerBtn = document.querySelector(".burger");
    burgerBtn.addEventListener("click", () => {
      burgerBtn.classList.toggle("burger__active");
    });
  })();
});
