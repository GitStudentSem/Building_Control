$(function () {
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

  // Красивое модальное окно
  const element = $(".modal__open"),
    func = () => {
      swal({
        title: "Внимание!",
        text: "Этот сайт - учебный проект: некоторые функции отсутствуют",
        icon: "warning",
        button: "Хорошо!",
      });
    };
  element.on("click", func);

  // Свайпер
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,

    // Настройка точек навигации свайпера
    pagination: {
      el: ".swiper__pagination",
      type: "bullets",
      clickable: "true",
    },
  });

  // Отключение телепортации наверх у ссылок
  $(".modal__open").click(function (e) {
    e.preventDefault();
  });
});
