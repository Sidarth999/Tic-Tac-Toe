let value = "X";
let clickedVal;
let boardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 0;
let resParagraph = document.getElementById("res");

function isEmpty(boxId) {
	if (boxId.placeholder === ""){
		return true;
	}
	return false;
}

function giveXOandFlip() {
	if(value === "X"){
		value = "O";
		clickedVal = "X";
		return "X";
	}
	value = "X";
	clickedVal = "O";
	return "O";
}

function fillBoard(clickedBox){
	if (clickedBox === "btn1") {
		boardValue[0] = clickedVal;
	}
	else if (clickedBox === "btn2"){
		boardValue[1] = clickedVal;
	}
	else if (clickedBox === "btn3") {
		boardValue[2] = clickedVal;
	}
	else if (clickedBox === "btn4") {
		boardValue[3] = clickedVal;
	}
	else if (clickedBox === "btn5") {
		boardValue[4] = clickedVal;
	}
	else if (clickedBox === "btn6") {
		boardValue[5] = clickedVal;
	}
	else if (clickedBox === "btn7") {
		boardValue[6] = clickedVal;
	}
	else if (clickedBox === "btn8") {
		boardValue[7] = clickedVal;
	}
	else if (clickedBox === "btn9") {
		boardValue[8] = clickedVal;
	}
}

function isWin() {
	// Row Checking
	// Row1 Checking
	if(count >= 5){
		if(boardValue[0] === clickedVal && boardValue[1] === clickedVal && boardValue[2] === clickedVal){
			return true;
		}
		// Row2 Checking
		else if(boardValue[3] === clickedVal && boardValue[4] === clickedVal && boardValue[5] === clickedVal){
			return true;
		}	
		// Row3 Checking
		else if(boardValue[6] === clickedVal && boardValue[7] === clickedVal && boardValue[8] === clickedVal){
			return true;
		}

		// Column Checking
		// Col1 Checking
		else if(boardValue[0] === clickedVal && boardValue[3] === clickedVal && boardValue[6] === clickedVal){
			return true;
		}
		// Col2 Checking
		else if(boardValue[1] === clickedVal && boardValue[4] === clickedVal && boardValue[7] === clickedVal){
			return true;
		}	
		// Col3 Checking
		else if(boardValue[2] === clickedVal && boardValue[5] === clickedVal && boardValue[8] === clickedVal){
			return true;
		}

		// Cross Checking
		// Cross L2R Checking
		else if(boardValue[0] === clickedVal && boardValue[4] === clickedVal && boardValue[8] === clickedVal){
			return true;
		}
		// Cross R2L Checking
		else if(boardValue[2] === clickedVal && boardValue[4] === clickedVal && boardValue[6] === clickedVal){
			return true;
		}
	}
	return false;
}


function clearBoard() {
	let boxButton = document.getElementsByTagName('input');
	for (var i = 0; i < 9; i++) {
		if( boxButton[i].hasAttribute("disabled") ){
			boxButton[i].removeAttribute("placeholder");
			boxButton[i].removeAttribute("disabled");
			boxButton[i].setAttribute("type","button");		
		}
	}
	boardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	value = "X";
	count = 0;
}

function placeValue(clicked) {
	if (isEmpty(clicked)){
		clicked.setAttribute("type","text");
		clicked.setAttribute("placeholder",giveXOandFlip());
		clicked.setAttribute("disabled","")
		fillBoard(clicked.id);
		count++;
	}
}

function printRes(printText) {	
	resParagraph.innerHTML = printText + " WINS !!!!!!!!!!!!";
}

function newMatch() {
	clearBoard();	
	resParagraph.innerHTML = "";
}

function stopMatch() {
	let stopButton = document.getElementsByTagName('input');
	for (var j = 0; j < 9; j++) {
		if( !stopButton[j].hasAttribute("placeholder") ){
			stopButton[j].setAttribute("type","text");
			stopButton[j].setAttribute("placeholder","");
			stopButton[j].setAttribute("disabled","");
		}
	}
	count = 0;
}

function played(ClickedBox){
	placeValue(ClickedBox);	
	if(isWin()){
		printRes(clickedVal);
		stopMatch();
	}
	else if(count == 9){
		printRes("No One");		
		stopMatch();
	}
}





