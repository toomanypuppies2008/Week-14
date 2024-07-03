const grades = [];
grades.push(Math.floor(Math.random() * 100));
grades.push(Math.floor(Math.random() * 100));
grades.push(Math.floor(Math.random() * 100));
grades.push(Math.floor(Math.random() * 100));
grades.push(Math.floor(Math.random() * 100));
grades.push(Math.floor(Math.random() * 100));
grades.push(Math.floor(Math.random() * 100));
grades.push(Math.floor(Math.random() * 100));
grades.push(Math.floor(Math.random() * 100));
grades.push(Math.floor(Math.random() * 100));
grades.push(Math.floor(Math.random() * 100));
grades.push(Math.floor(Math.random() * 100));

const buttonOne = document.getElementById("one");
buttonOne.onclick = function () {
  const div = document.querySelector(".one");
  div.textContent = grades;
};

let sum = 0;
grades.forEach(function (num) {
  return (sum += num);
});
const middleGrade = Math.floor(sum / grades.length);

const buttonTwo = document.getElementById("two");
buttonTwo.onclick = function () {
  const div = document.querySelector(".two");
  div.textContent = middleGrade;
};

const maxGrade = Math.max(...grades);
const buttonThree = document.getElementById("three");
buttonThree.onclick = function () {
  const div = document.querySelector(".three");
  div.textContent = maxGrade;
};

const minGrade = Math.min(...grades);
const buttonFour = document.getElementById("four");
buttonFour.onclick = function () {
  const div = document.querySelector(".four");
  div.textContent = minGrade;
};

const positiveGrades = grades.filter((num) => num >= 60);
const buttonFive = document.getElementById("five");
buttonFive.onclick = function () {
  const div = document.querySelector(".five");
  div.textContent = positiveGrades.length;
};

const negativeGrades = grades.filter((num) => num < 60);
const buttonSix = document.getElementById("six");
buttonSix.onclick = function () {
  const div = document.querySelector(".six");
  div.textContent = negativeGrades.length;
};

const gradesInLetters = grades.map(function (num) {
  if (num >= 80 && num <= 100) {
    return "A";
  }
  if (num >= 60 && num <= 79) {
    return "B";
  }
  if (num >= 40 && num <= 59) {
    return "C";
  }
  if (num >= 20 && num <= 39) {
    return "D";
  }
  if (num < 20) {
    return "E";
  }
});

const buttonSeven = document.getElementById("seven");
buttonSeven.onclick = function () {
  const div = document.querySelector(".seven");
  div.textContent = gradesInLetters;
};
