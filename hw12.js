
$(document).ready(function() {                                            // Выполняется после полной загрузки страницы


	var numsec = Math.floor(Math.random() * 15) + 1;                   // Загадать случайное число от 1 до 15
	var pop = 0;                                                         // Счетчик попыток и максимальное количество попыток
	var maxpop = 3;

		$("#but1").click(function() {                                    // Обработчик события клика

		var b = Number($("#inp1").val());                           // Введенное число

		pop++;                                                           // Увеличить счетчик попыток

		if (b === numsec) {                                          // Проверить, угадал ли пользователь число

			$("#result").text("Угадал!")

		} else if (pop === maxpop) {

			$("#result").text("Кончились попытки. Загаданное число: " + numsec)
	setTimeout(reload,3000)

		} else if (b < numsec) {

			$("#result").text("Слишком мало. У вас осталось " + (maxpop - pop) + " попыток.")


		} else {

			$("#result").text("Слишком много. У вас осталось " + (maxpop - pop) + " попыток.")

		}
	});
		});
$(document).ready(function() {
  $("#div").hide();
  $("#but2").click(function() {
  $("#div").show(1000);
  });
   $("#but2").click(function(){
    var div = $("#div");
    div.animate({height: '700px', opacity: '0.4'}, "slow");
    div.animate({width: '900px', opacity: '1'}, "slow");
      });
});
function reload(time){
    location.reload()}
