// Выпадание меню при нажатии на бургер
var navigation = document.querySelector("#navigation");
var navbarOvarlay = document.querySelector(".navbar-ovarlay");
function navBar() {
	navigation.style.display = "block";
	navbarOvarlay.style.display = "block";
}

function ovarlay() {
	navigation.style.display = "none";
	navbarOvarlay.style.display = "none";
}



/*
1. Сверстать слайдер -done
2. Сделать переключение фотографий влево и вправо
3. Сделать переключение фотографий по клику на нижние фото
4. При клике на большоую картинку увеличивать картирку
*/

var images = [
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg"
];

// Путь картинки слайдера
var path = "img/slider/";

var currentImage = 0;

// Первая картинка
$(".main-slider img").attr("src", path + images[currentImage]);

// Клик по правой стрелку
$(".main-slider .next").click(function(){
	currentImage++;
	if(currentImage >= images.length) {
		currentImage = 0;
	}
	$(".main-slider img").attr("src", path + images[currentImage]);
}); 


// Клик по левой стрелку
$(".main-slider .pref").click(function(){
	currentImage--;
	if(currentImage < 0) {
		currentImage = images.length - 1;
	}
	$(".main-slider img").attr("src", path + images[currentImage]);

}); 


// Создание карточек картинок
for(var i = 0; i < images.length; i++) {
	// Добавляем элемент в блок с мини картинками
	$('.slides ul').append("<li data-id='" + i +"'>" +
		"<img src='" +
		 path + images[i] 
		 + "'></li>");
	// Если это превая картинка, то добавляем ей класс "active"
	if(i == 0) {
		$('.slides ul li').addClass('active')
	}
}

// Делаем клик по слайдам (миникартинки)
$('.slides ul li').click(function(e) {
	// Убираем у всех элементов клас "active"
	$('.slides ul li').removeClass('active');
	// На элементе по которому кликнули добавляем класс эктив
	$(this).addClass('active');
	// Получаем id элемента по которому кликнули
	var id = this.dataset.id;
	// Меняем картинку в слайде (большую)
	$(".main-slider img").attr("src", path + images[id]);
	return id;
});