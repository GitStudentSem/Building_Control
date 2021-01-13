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
});
