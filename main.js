// 랜덤번호 지정
// 유저가 번호를 입력 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호 Down!
// 랜덤번호가 > 유저번호 Up!
// Reset 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다.


let computerNumber = 0;
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button');
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById('chance-area');
let history = [];

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', () => userInput.value = '');


function pickRandomNumber() {
	computerNumber = Math.floor(Math.random() * 100) + 1;
	console.log('랜덥번호 :',computerNumber);
}

function play() {
	let userValue = userInput.value;

	if(userValue < 1 || userValue > 100) {
		resultArea.textContent = '1과 100사이의 숫자를 입력하세요!';
		return;
	}

	if(history.includes(userValue)) {
		resultArea.textContent = '이미 입력한 번호입니다. 다른 번호를 입력하세요!';
		return;
	}
	
	chances--;
	chanceArea.textContent = `남은기회 ${chances}번`

	if(userValue < computerNumber){
		resultArea.textContent = 'Up!!!'
	} else if(userValue > computerNumber) {
		resultArea.textContent = 'Down!!!'
	} else {
		resultArea.textContent = '와우!!! 정답!!!'
		gameOver = true;
	}

	history.push(userValue); 
	console.log(history);

	if(chances < 1) {
		gameOver = true;
	}

	if(gameOver == true) {
		playButton.disabled = true;
	}
}

function reset() {
	pickRandomNumber()
	userInput.focus();
	playButton.disabled = false;
	gameOver = false;
	chances = 5;
	resultArea.textContent = '다시 도전!!';
	chanceArea.textContent = `기회 : ${chances}번`;
	history = [];
}

// function reset() {
// 	userInput.value = '';
// 	userInput.focus();
// 	pickRandomNumber()
// 	resultArea.textContent = '다시도전';
// 	gameOver = false;
// 	playButton.disabled = false;
// 	chances = 5;
// 	chanceArea.textContent = `기회 : ${chances}번`
// 	history = [];
// }

pickRandomNumber()








// let computerNumber = 0;
// let playButton = document.getElementById('play-button');
// let userInput = document.getElementById('user-input');
// let resultArea = document.getElementById('result-area');
// let resetButton = document.getElementById('reset-button');
// let chanceArea = document.getElementById('chance-area');
// let chances = 5;
// let gameOver = false;
// let history = [];


// playButton.addEventListener('click', play);
// resetButton.addEventListener('click', reset);
// userInput.addEventListener('focus', () => userInput.value = '');

// function pickRandomNumber() {
// 	computerNumber = Math.floor(Math.random() * 100) + 1;
// 	console.log('랜덤번호 :', computerNumber);
// }

// function play() {
// 	let userValue = userInput.value;
	
// 	if(userValue < 1 || userValue > 100 ) {
// 		resultArea.textContent = '1과 100사이의 숫자를 입력하세요!'
// 		return;
// 	}

// 	if(history.includes(userValue)) {
// 		resultArea.textContent = '이미 입력한 숫자입니다.'
// 		return;
// 	}

// 	chances--;
// 	chanceArea.textContent = `남은기회 : ${chances}번`

	

// 	if(userValue < computerNumber) {
// 		resultArea.textContent = 'Up!!!'
// 	} else if(userValue > computerNumber) {
// 		resultArea.textContent = 'Down!!!'
// 	} else {
// 		resultArea.textContent = '와우!!! 정답!!!'
// 		gameOver = true;
// 	}

// 	history.push(userValue);
// 	console.log(history)

// 	if(chances < 1) {
// 		gameOver = true;
// 	}

// 	if(gameOver == true) {
// 		playButton.disabled = true;
// 	}
// }

// function reset() {
// 	userInput.value = '';
// 	userInput.focus();
// 	pickRandomNumber()
// 	resultArea.textContent = '다시도전';
// 	gameOver = false;
// 	playButton.disabled = false;
// 	chances = 5;
// 	chanceArea.textContent = `기회 : ${chances}번`
// 	history = [];
// }

// pickRandomNumber();

