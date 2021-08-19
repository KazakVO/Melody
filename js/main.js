$(document).ready(function () {
  var currentFloor = 2;//переменная в которой хранится значение этажа
  var counterUp = $(".main__counter_up");//кнопка увеличения этажа
  var counterDown = $(".main__counter_down");//кнопка уменьшения этажа
  var floorPath = $(".main__home_img path");//отдельный класс который пихается в SVG

  // Функция при наведении мышки на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("main__current_floor"); //удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
    $(".main__counter").text(currentFloor); //записываем значение этажа в счетчик справа
  });

  //отслеживаем клик по кнопки вверх
  counterUp.on("click", function () {
    //проверяем значение этажа
    if (currentFloor < 18) {
      currentFloor++;//прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGroupping: false
      });//форматируем переменную с этажом, что бы было 01 а не 1
      $(".main__counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
      floorPath.removeClass("main__current_floor"); //удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("main__current_floor"); //подсвечиваем текущий этаж
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false });
      $(".main__counter").text(usCurrentFloor);
      floorPath.removeClass("main__current_floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("main__current_floor");
    }
  })

});