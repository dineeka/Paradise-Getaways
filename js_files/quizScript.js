var place = 0; //Place in the array
var correct = 0;
const questions = [		
		["1.  In which province is Anuradhapura located?", "Nothern Province","North Central Province", "North Western Province", "Eastern Province"],
		["2.  In which year did UNESCO named the sacred city of Anuradhapura as a world heritage ? ", "1982", "1983", "1984", "1985"],
		["3.  In which province is kandy Located", "North Central Province", "Central Province", "Sabaragamuwa Province", "Uva Province"],
		["4.  What is not a apart of the Three-Historic Temple Loop of Kandy?", "Gadaladeniya Temple", "Ambakke Devalaya", "Temple of Sacred Tooth Relic", "Lankathilaka Temple"],
		["5.  What is a place that you can visit while you are at galle ?", "Unawatuna Beach", "Ussangoda National Park", "Birds Research Centre And Resort", "Sithulpawwa Buddhist Monastery"],
		["6.  This destination is referred to as the'Little England'?", "Nuwara Eliya", "Anuradhapura", "Kandy", "Galle"],
		["7.  A place you can visit while you are at Nuwara Eliya?", "Lake Gregory", "Udawatta Kele Sanctuary", "Wilpattu National Park", "Wales Park"],
		["8.  What is not among the list of activities you can do in Galle?", "Surfing", "Whale Watching", "Snorkeling ", "Sky-diving"],
		["9.  This is Sri Lanka's first planned city ", "Anuradhapura", "Polonnaruwa", "Kandy", "Yapahuwa"],
		["10. This place used to be the King's Personal Garden", "Hakgala Gardens", "Victoria Park", "Galway's Land National Park", "Udawatta Kele Sanctuary"]  
];


var answers = ["2", "1", "2", "3", "1", "1", "1", "4", "1", "4"]; // Answers
var score = 0;
var time = 60;  // Time set to 1 minute

// Abstracting getElementById
function get(x) {
    return document.getElementById(x);
}
var val = ["1", "2", "3", "4"];
function getChoice(choi, val){
    return "<div class='container'><input type='radio' class='choiceType' name='choices' value='" + val + "'><span>" + choi + "</span><br></div>";
}

var Cor =[];
var Incor=[];

function checkAnswer() {

    var choice = 0;
    var choices = document.getElementsByName("choices");
    var userAnswer = document.querySelector('input[type=radio]:checked');
	var correctAnswer =[];
	var incorrectAnswer=[];

    if (!userAnswer) { //Error Handling
        alert("Please Select an Answer!") 
    } else {
        for (var i = 0; i < choices.length; ++i) {
            if (choices[i].checked) {           // looping through the answered array
                choice = choices[i].value;
            }
        }
        if (choice == answers[place]) { // comparing userinput with answers
			correctAnswer.push(questions[place][choice]);
            correct++;
            score += 2;
        }else {
			incorrectAnswer.push(questions[place][choice]);
            score -= 1;
        }
        place++;  // array place is being incremented
        renderQuestion();
    }
	var strCor = correctAnswer.toString();
	var strIncor = incorrectAnswer.toString();
	console.log(strCor);
	console.log(strIncor);
	Cor.push(strCor);
	Incor.push(strIncor);
	console.log(Cor);
	console.log(Incor);
	
}

function eliminateEmpty(elem){
	return elem != "";
}

function populateChoices(id){
    var opt = get(id);
    var quizQuestion = questions[place][0];
    opt.innerHTML = "<h3>" + quizQuestion + "</h3>";
    for (var i = 1; i < questions[place].length; ++i){            // Going through the questions array(iterating)
        opt.innerHTML += getChoice(questions[place][i], val[i-1]);
    }
    opt.innerHTML += "<br><div class='buttonContainer'><button onclick='checkAnswer()' class='btn'>Next Question </button></div>"
}

function renderQuestion() {
    var test = get("test");
    var test_status = get("test_status");
	var correct_ans = get("correct_ans");
	var incorrect_ans = get("incorrect_ans");
    if (place >= questions.length){

        if (score < 0){
            score = 0; 
        }

        window.clearInterval(update); // End of timer
        time = "-"; // Stop the timer once the user has answered all the questions
        test.innerHTML = "<h2> You got " + correct + " out of " + questions.length + " correct and Your Score is " + score + "</h2>"; // Question Counter
        test_status.innerHTML = "Quiz Completed.";
		correct_ans.innerHTML = "<h3> You Got These Answers Correct: " + Cor.filter(eliminateEmpty) + " </h3>";
		incorrect_ans.innerHTML = "<h3> You Got These Answers Incorrect: " + Incor.filter(eliminateEmpty)+ "</h3>" ;
		if (score>=10){
			document.body.style.backgroundColor = "PaleGreen";
		}else{
			document.body.style.backgroundColor = "PaleVioletRed";
		}
        return false;

    }

    test_status.innerHTML = "Question " + (place + 1) + " of " + questions.length;
    populateChoices("test");
}

function quizTimer(){
    time = time - 1; // Countdown start
    if(time < 60){
        quizTime.innerHTML = time;
    }
    if (time < 1){
        window.clearInterval(update);   // Time's up; auto submission

        alert("Time is Up")
        test.innerHTML = "<h2> You got " + correct + " out of " + questions.length + " correct and Your Score is " + score + "</h2>"; // Question Counter
        test_status.innerHTML = "Quiz Completed.";
		correct_ans.innerHTML = "<h3> You Got These Answers Correct: <br>" + Cor.filter(eliminateEmpty) + "</h3>" ;
		incorrect_ans.innerHTML = "<h3>You Got These Answers Incorrect: <br>" + Incor.filter(eliminateEmpty)+"</h3>";
		if (score>=10){
			document.body.style.backgroundColor = "PaleGreen";
		}else{
			document.body.style.backgroundColor = "PaleVioletRed";
		}
        return false;
    }
}

update = setInterval("quizTimer()", 1000);
		