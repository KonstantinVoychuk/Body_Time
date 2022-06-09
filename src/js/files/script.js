// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Обработка клика на иконке "Воронка"--------------------------------------------------------------------------------

const voronkaMenu = document.querySelector('.select-search-block');
const selectGroup = document.querySelector('.select-group');

document.addEventListener("click", openSelect);

function openSelect(event) {
	if(event.target.closest(".voronka")) {
		selectGroup.classList.toggle("_active");
	}
	if(event.target.closest(".select__options")) {
		selectGroup.classList.remove("_active");
	}
	
	if(!event.target.closest(".select-search-block")) {
		selectGroup.classList.remove("_active");
	}

}

//--------------------------------------------------------------------------------




