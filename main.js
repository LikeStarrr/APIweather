const UI_ELEMENTS = {
    INPUT_SEARCH: document.querySelector(".input-search"),
    BTN_SEARCH: document.querySelector(".btn-search"),
    BTN_FAVORITE: document.querySelector(".btn-favorite"),
    TAB_NOW: document.querySelector(".tab_now"),
    TAB_DETAILS: document.querySelector(".tab_details"),
    TAB_FORECAST: document.querySelector(".tab_forecast"),

}

UI_ELEMENTS.BTN_SEARCH.addEventListener('click', function() {    
    getWeather(location); 
})

function getWeather(location) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = 'boston';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    fetch(url);
}



	ADD.BTNS[i].addEventListener ('click', function () {
 
    let isAddContent = ADD.INPUTS[i].value.trim();
    try{
       if (!isAddContent) {
         throw "err1";
       }
    } catch(error) {
      if (error=="err1") {
        alert("Enter new task!");
        return;
      }
    }
    const DIV = document.createElement('div');
    DIV.className = 'task';

    DIV.innerHTML = `<label> 
        <input class="task_check" type="checkbox"> 
        <span class="cursor"></span>
      </label>
      <span class="task_text" > ${ADD.INPUTS[i].value} </span>
      <button class="task_delete"><img src="./img/delete-task-icon.svg" alt="-"></button>`	
 
      PRIORITY_BLOCKS[i].append(DIV);

    ADD.INPUTS[i].value = '';

    DIV.querySelector('.task_check').addEventListener('click', changeColor);
    DIV.querySelector('.task_delete').addEventListener('click', deleteTask); 
  })

