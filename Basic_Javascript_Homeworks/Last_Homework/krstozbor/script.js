
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    let categories;         
    let chosenCategory;     
    let getHint ;          
    let word ;             
    let guess ;             
    let guesses = [];      
    let lives ;             
    let counter ;           
    let space;              
  
    
    let showLives = document.getElementById("mylives");
    let showCatagory = document.getElementById("scatagory");
    getHint = document.getElementById("hint");
    let showClue = document.getElementById("clue");
  
 let correct;
 let letters;
    let buttons = function () {
     let myButtons = document.getElementById('buttons');
     letters = document.createElement('ul');
  
      for (let i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    
 
    let selectCat = function () {
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "Football Teams";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "Movies";
      } else if (chosenCategory === categories[2]) {
        catagoryName.innerHTML = "Capitals";
      }
    }
  

     let result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (let i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
  
    let comments = function () {
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (let i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
          showLives.innerHTML = "You Win!";
        }
      }
    }
  
     
    let animate = function () {
      let drawMe = lives ;
      drawArray[drawMe]();
    }
  
    

   let canvas =  function(){
  
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#fff";
      context.lineWidth = 2;
    };
    
     let head = function(){
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
      }
      
   let draw = function(pathFromx, pathFromy, pathTox, pathToy) {
      
      context.moveTo(pathFromx, pathFromy);
      context.lineTo(pathTox, pathToy);
      context.stroke(); 
  }
  
    let frame1 = function() {
       draw (0, 150, 150, 150);
     };
     
    let frame2 = function() {
       draw (10, 0, 10, 600);
     };
    
    let frame3 = function() {
       draw (0, 5, 70, 5);
     };
    
     let frame4 = function() {
       draw (60, 5, 60, 15);
     };
    
     let torso = function() {
       draw (60, 36, 60, 70);
     };
    
     let rightArm = function() {
       draw (60, 46, 100, 50);
     };
    
     let leftArm = function() {
       draw (60, 46, 20, 50);
     };
    
     let rightLeg = function() {
       draw (60, 70, 100, 100);
     };
    
     let leftLeg = function() {
       draw (60, 70, 20, 100);
     };
    
    let drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
  
 
     const check = function () {
      list.addEventListener('click', function () {
        let geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (let i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            guesses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        let j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      });
    }
    
  
    let play = function () {
      categories = [
          ["inter", "milan", "juventus", "chelsea", "man-utd", "psg", "vardar"],
          ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
          ["manchester", "milan", "madrid", "amsterdam", "prague"]
      ];
  
      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      guesses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
      canvas();
    }
  
    play();
    
  
    
    getHint.addEventListener('click', function () {
  
        hints = [
          ["Milano", "Milano", "old lady", "russian owner", "Ronaldo", "arabs", "best club in the world"],
          ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
          ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
      ];
  
      let catagoryIndex = categories.indexOf(chosenCategory);
      let hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
    });
  
    
  let playAgain = document.getElementById('reset');

   playAgain.addEventListener('click', function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    });
