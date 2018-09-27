

  var questions = [{
    question: "What were the names of Bruce Wayne's parents?",
    answers: ["Wayne & Alice", "Jim & Pam", "Thomas and Martha", "James & Emily"],
    correctAnswer: "Thomas and Martha"
  },
  
  {question: "Who is credited with creating Batman?",
  answers: ["Jack Kirby", "Bob Kane", "Steve Jobs", "Jerry Seigel"],
  correctAnswer: "Bob Kane",
  },

  {question: "Which of these Bat-villains was introduced first?",
  answers: ["Catwoman", "The Riddler", "The Penguin", "Mr Freeze"],
  correctAnswer: "Catwoman",
  },

  {question: "What former District Attorney became the villain known as Two-Face?",
  answers: ["Edward Nigma", "Jason Blood", "Jimmy Kimmel", "Harvey Dent"],
  correctAnswer: "Harvey Dent",
  },

  {question: "What member of the Batman family became Oracle?",
  answers: ["Batgirl", "Robin", "Batwoman", "Huntress"],
  correctAnswer: "Batgirl",
  },

  {question: "Who killed Jason Todd (the second Robin)?",
  answers: ["Joker", "Bane", "Kevin", "Ra's Al Ghul"],
  correctAnswer: "Joker",
  },

  ]
  
    
    var game ={
    correct: 0, 
    incorrect: 0, 
    counter: 30,
  
    countdown: function() {
      game.counter--
      $("#timerBox").html(game.counter);
      if (game.counter == 0) {
        game.done();
      }
    },
  
    done: function() {
  
      $("#questionBox").hide();
      $("#timerBox").hide();
      $("#done").hide();
      clearInterval(game.counter)
  
      $.each($("input[name='question-0']:checked"), function() {
        if ($(this).val() === questions[0].correctAnswer) {
          game.correct++;
          
        }
        else {
          game.incorrect++;
          
        }
      });
  
      $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() === questions[1].correctAnswer) {
          game.correct++;
          
        }
        else {
          game.incorrect++;
          
        }
      });

      $.each($("input[name='question-2']:checked"), function() {
        if ($(this).val() === questions[2].correctAnswer) {
          game.correct++;
          
        }
        else {
          game.incorrect++;
          
        }
      });

      $.each($("input[name='question-3']:checked"), function() {
        if ($(this).val() === questions[3].correctAnswer) {
          game.correct++;
          
        }
        else {
          game.incorrect++;
          
        }
      });

      $.each($("input[name='question-4']:checked"), function() {
        if ($(this).val() === questions[4].correctAnswer) {
          game.correct++;
          
        }
        else {
          game.incorrect++;
          
        }
      });

      $.each($("input[name='question-5']:checked"), function() {
        if ($(this).val() === questions[5].correctAnswer) {
          game.correct++;
          
        }
        else {
          game.incorrect++;
          
        }
      });
  
  
      console.log("You got " +game.incorrect+ " incorrect.")
      console.log("You got " +game.correct+ " correct.")
  
      $("#topBox").hide();
      $("#scoreBox").show();
      $("h1").hide();
  
      $("#scoreBox").append("<h4>Congratulations<h4>");
      $("#scoreBox").append("<h4>You got " + game.correct + " correct.<h4>");
      $("#scoreBox").append("<h4>You got " + game.incorrect + " incorrect.<h4>");
  
      }
        
      };
  
  
  $("#start").on("click", function() {
  
  timer = setInterval(game.countdown, 1000);
  
  game.countdown();
  
  $("#questionBox").show();
  $("#answerBox").show();
  $("#start").hide();
  $("#done").show();
  $("#timerBox").show();
  $("#topBox").hide();
  
  $("questionBox").empty();
  $("#answerBox").empty(); 
  
  for (var i = 0; i < questions.length; i++) {
        $("#questionBox").append("<h3>" + questions[i].question + "</h3>")
  
  
  
  for (var j = 0; j < questions[i].answers.length; j++) {
          $("#questionBox ").append("<input type='radio' class='ansBtn' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
        }
  }
  
  
  
  });
  
  $("#done").on("click", function() {
    game.done();
  
  
  })
  