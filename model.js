class Question{
    constructor(firstNumber, secondNumber, answer){
       this.date = new Date().toDateString();
       this.expected = firstNumber * secondNumber;
       this.score = this.expected == answer;
       this.firstNumber = firstNumber;
       this.secondNumber = secondNumber;
       this.answer = answer;
    }
  }
  class Quiz{
    constructor(){
      this.quizes = [];
    }
  }
  
  class Person{
    constructor(name){
      this.name = name;
      this.tests = new Quiz();
    }
  
    addQuiz(quiz){
      this.tests.quizes.push(quiz);
    }
  
    printResults(){
      this.tests.quizes.forEach(question => {
        console.log(this.name, question.date, question.firstNumber,
                  question.secondNumber, question.answer, question.expected,
                  question.score);
      })
    }
  }