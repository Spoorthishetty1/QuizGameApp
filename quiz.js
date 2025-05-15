const quesJSON = [
  {
    correctAnswer: 'Anchor',
    options: ['Anchor', 'Action', 'Attribute', 'Array'],
    question: 'What does the <a> tag in HTML stand for?',
  },
  {
    correctAnswer: 'color',
    options: ['font-color', 'color', 'text-color', 'background-color'],
    question: 'Which CSS property is used to change the text color of an element?',
  },
  {
    correctAnswer: 'alert()',
    options: ['popup()', 'alert()', 'prompt()', 'show()'],
    question: 'Which method is used to display a popup alert box in JavaScript?',
  },
  {
    correctAnswer: '<img>',
    options: ['<img>', '<image>', '<pic>', '<src>'],
    question: 'Which HTML tag is used to insert an image?',
  },
  {
    correctAnswer: '// This is a comment',
    options: [
      '<!-- This is a comment -->',
      '# This is a comment',
      '// This is a comment',
      '** This is a comment **',
    ],
    question: 'How do you write a comment in JavaScript?',
  },
];

   
    let score=0;
    let currentQuestion = 0;
    const totalScore=quesJSON.length;

    //Accessing all the elements:
    const questionEl = document.getElementById("question");
    const optionEl = document.getElementById("options");
    const scoreEl = document.getElementById("score");
    const nextEl=document.getElementById("next");
    showQuestion();

    nextEl.addEventListener("click",()=>{
      scoreEl.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestion()
    });
    function showQuestion(){
       // Destructuring the object
     const{correctAnswer, options, question} = quesJSON[currentQuestion];

      //Setting question text content
    questionEl.textContent = question; 
    
    const shuffledOptions = shuffleOptions(options);
    
        //Populating the Options div with the buttons.
        shuffledOptions.forEach((opt) => {
          const btn = document.createElement('button');
          btn.textContent = opt;
          optionEl.appendChild(btn);
  
      // Event handling on the button:
      btn.addEventListener("click", () => {
          if(opt === correctAnswer){
              score++;
          }
          else{
              score=score-0.25;
          }
      scoreEl.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestion();
      
          });
      });
  }
  function nextQuestion(){
    currentQuestion++;
     optionEl.textContent = '';
    if(currentQuestion>=quesJSON.length){
      questionEl.textContent = 'Quiz Completed!!';
      nextEl.remove();
     

    }else{
      showQuestion();
    }
    
  }

//Shuffling the Options
function shuffleOptions(options) {
    for (let i = options.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * i + 1);
      [options[i], options[j]] = [
        options[j],
        options[i],
      ];
    }
    return options;
  }
  
//   shuffleOptions([1, 2, 3, 4, 5]);