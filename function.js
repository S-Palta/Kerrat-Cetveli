class Manager {
    constructor(name){
       this.person = new Person(name);
       this.firstNumber = this.random();
       this.secondNumber = this.random();
    }
  
    random(){
      return Math.floor(Math.random() * 9);
    }
  
    start(){
      // fill inputs
    }
  
    check(){
      // get first, second and last results from HTML
      this.person.addQuiz(new Question(this.firstNumber, this.secondNumber, 22));
      this.person.printResults();
    }
  }

  document.querySelector('#fullscreen').addEventListener('click', openFullscreen());

  function addPerson(){
      let personalData = document.getElementById('');
  }