function solve() {
  let allQuestions = document.querySelectorAll("#quizzie section");
  let correctAnswersCount = 0;
  const correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents"
  ];

  let firstQuestion = allQuestions[0];
  let firstQuestionAnswers = firstQuestion.querySelectorAll("p");

  let secondQuestion = allQuestions[1];
  let secondQuestionAnswers = secondQuestion.querySelectorAll("p");

  let thirdQuestion = allQuestions[2];
  let thirdQuestionAnswers = thirdQuestion.querySelectorAll("p");

  //first question
  [...firstQuestionAnswers].forEach(answer => {
    answer.addEventListener("click", checkFirstQuestion);
  });

  function checkFirstQuestion() {
    if (correctAnswers.includes(this.textContent)) {
      correctAnswersCount++;
    }

    firstQuestion.style.display = "none";
    secondQuestion.style.display = "block";

    [...secondQuestionAnswers].forEach(answer => {
      answer.addEventListener("click", checkSecondQuestion);
    });
  };

  //second question
  function checkSecondQuestion() {
    if (correctAnswers.includes(this.textContent)) {
      correctAnswersCount++;
    }

    secondQuestion.style.display = "none";
    thirdQuestion.style.display = "block";

    [...thirdQuestionAnswers].forEach(answer => {
      answer.addEventListener("click", checkThirdQuestion);
    });
  };

  //third question
  function checkThirdQuestion() {
    if (correctAnswers.includes(this.textContent)) {
      correctAnswersCount++;
    }

    thirdQuestion.style.display = "none";
    showResult();
  };

  //results
  function showResult() {
    let result = document.querySelector("#results");
    result.style.display = "block";

    let title = result.querySelector("h1");

    if (correctAnswersCount === 3) {
      title.textContent = "You are recognized as top JavaScript fan!";
    } else {
      title.textContent = `You have ${correctAnswersCount} right answers`;
    }
  };
}
