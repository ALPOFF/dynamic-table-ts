import * as data from "../data.json";

//Создаем таблицу
let tableElement = document.createElement("table");

/**
  * Генерируем таблицу
  * @param {Array} jsonData - первое число
  * @param {string} elementIdForTable - второе число
  * @returns {void}
  */

interface UserData {
    firstName?: string;
    lastName?: string;
}

function generateTable(jsonData: UserData[], elementIdForTable: string): void {
    //Создаем заголовки таблицы
    let headerCellNames: string = "";
    let headerCellNamesArray: string[] = Object.keys(jsonData[0]);
    for (let k = 0; k < headerCellNamesArray.length; k++) {
        headerCellNames += `<th><div class="th-container">${headerCellNamesArray[k]} <p class="sort-pointer">&#9650</p></div></th>`;
    }
    tableElement.innerHTML += `<tr>${headerCellNames}</tr>`;

    //Добавлем остальные строки с данными
    for (let i = 0; i < jsonData.length; i++) {
        let row: HTMLTableRowElement = tableElement.insertRow(-1);
        for (let l = 0; l < headerCellNamesArray.length; l++) {
            let cell: HTMLTableCellElement = row.insertCell(-1);
            let currentUserData: any = jsonData[i];
            cell.innerHTML = currentUserData[headerCellNamesArray[l]];
        }
    }

    //Получаем div в который будет вложена таблица и поиск
    let mainDivContainer: HTMLElement = document.getElementById(elementIdForTable) as HTMLElement;

    //Создаем div для поиска
    let searchDivContainer: HTMLElement = document.createElement("div");
    searchDivContainer.classList.add("main-container");
    mainDivContainer.appendChild(searchDivContainer);

    //Создаем div для таблицы
    let tableDivContainer: HTMLElement = document.createElement("div");
    tableDivContainer.classList.add("table-container");
    tableDivContainer.id = "tableElement";
    mainDivContainer.appendChild(tableDivContainer);

    //Добавляем ввод
    let inputElement: HTMLInputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.id = "searchInput";
    searchDivContainer.appendChild(inputElement);

    //Добавляем селект
    let selectElement: HTMLSelectElement = document.createElement("select");
    selectElement.setAttribute("id", "searchSelect");

    for (let i = 0; i < headerCellNamesArray.length; i++) {
        let optionElement = document.createElement("option");
        optionElement.value = `${i}`;
        optionElement.text = headerCellNamesArray[i];
        selectElement.appendChild(optionElement);
    }
    searchDivContainer.appendChild(selectElement);

    //Добавляем таблицу
    tableDivContainer.innerHTML = "";
    tableDivContainer.appendChild(tableElement);
}

generateTable(data.users, "table");



//Сортировка таблицы
let headerCellsArray = document.querySelectorAll("th");
let sortStatus: boolean = true; //true - отсортировано от А до Я; false - отсортировано от Я до А
let prevColumnNumber: number = 0;
let tableRows = Array.from(document.querySelectorAll("tr")).slice(1);

function sortableElement(currentColumnNumber: number): void {
    let sortPointer = document.getElementsByClassName("sort-pointer");
    if (!sortStatus && prevColumnNumber == currentColumnNumber) { //Проверяем был ли отсортирован текущий столбец
        tableRows.reverse();
        sortStatus = true;
        sortPointer[currentColumnNumber].innerHTML = "&#9650";
    } else {
        //Сортируем сверяя значения от индекса столбца
        tableRows.sort((a, b) => a.children[currentColumnNumber].innerHTML.localeCompare(b.children[currentColumnNumber].innerHTML));
        prevColumnNumber = currentColumnNumber;
        sortStatus = false;
        sortPointer[currentColumnNumber].innerHTML = "&#9660";
    }
    tableRows.forEach(row => tableElement.appendChild(row));
}

headerCellsArray.forEach((el, index) => el.addEventListener("click", sortableElement.bind(this, index)));



//Поиск
let input: HTMLInputElement = <HTMLInputElement>document.getElementById("searchInput")!;
let select: HTMLSelectElement = <HTMLSelectElement>document.getElementById("searchSelect");

input.oninput = function findValue(): void {
    let selectValue: number = Number(select.value);
    tableRows.forEach((el: HTMLElement) => {
        let tableRow: HTMLElement = el.children[selectValue] as HTMLElement;
        if (tableRow.innerHTML.toLowerCase().indexOf(input.value.toLowerCase()) !== -1 && input.value !== "") {
            tableRow.style.backgroundColor = "yellow";
        } else {
            tableRow.removeAttribute("style");
        }
    })
}

//Сброс поиска и выделения полей при изменении столбца
select.onchange = function clearHighlight(): void {
    let tableDataRows = Array.from(document.querySelectorAll("td"));
    tableDataRows.forEach(el => {
        el.removeAttribute("style");
        input.value = "";
    })
}