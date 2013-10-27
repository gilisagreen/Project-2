var puzzle = new Array();
var backPiece = new Array();


window.onload = function() {
    puzzle =  $$("#puzzlearea div");
    var row = 0;
    var right = 0;
    var top = 0;

  for (var i=0;i<puzzle.length;i++){
        puzzle[i].addClassName("puzzlepiece");
        puzzle[i].style.float = "left";
       puzzle[i].style.backgroundSize = "400px 400px";
       
       backPiece[i] = new Array();
       backPiece[i][0] = right;
       backPiece[i][1] = top;

       puzzle[i].style.backgroundPosition = "-"+backPiece[i][0]+"px -"+backPiece[i][1]+"px";
       row ++;
       if (row === 4){top += 100; right = 0; row = 0; } else {right +=100;}
    }

  freemove = document.createElement("div");
   $("puzzlearea").appendChild(freemove);
   freemove.addClassName("puzzlepiece");
    freemove.style.float = "left";
   freemove.style.background = "none";
   freemove.style.border = "2px solid white";

   $("shufflebutton").observe('click', shufflePuzzle);
   movepiece();
  complete();
}

var complete = function(){
  var numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  var puzzle;
  var c = numArray.toString();
  var sp = puzzle.toString();

  if (c == sp){
    alert("You Won!");
  }
}

function shufflePuzzle(){
		var numArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
		var puzzlep = $$("#puzzlearea div");
		for (var i=puzzlep.length; i>0; i){
			var j = Math.floor(Math.random() * i);
			var x = numArray[--i];
			var test = numArray[j];
			if(test == "0") { 
				puzzlep[i].addClassName("puzzlepiece");
	 			puzzlep[i].style.backgroundColor = "white";
        puzzlep[i].style.background = "none";
	 			puzzlep[i].style.border = "2px solid white";
	 			puzzlep[i].innerHTML = "";
					}
			else{
      puzzlep[i].innerHTML = numArray[j];
      puzzlep[i].addClassName("puzzlepiece");
      puzzlep[i].style.border = "2px solid black";
      puzzlep[i].style.backgroundImage = "url(background.jpg)";
      puzzlep[i].style.backgroundSize = "400px 400px";
       //without the line below the puzzle shuffles fine. But I cant get it to work
      puzzlep[i].style.backgroundPosition = "-"+backPiece[test-1][0]+"px -"+backPiece[test-1][1]+"px";
          }
			numArray[j] = x;
    }
  mopiece();
   }


var movepiece = function(){
    var move = this.innerHTML;
    var puzzlep = $$("#puzzlearea div");
    var yon = this.hasClassName('movablepiece');
    var blank = 0;
    var bgcorrect =0;
    //complete();
    //alert(yon);
    if (yon){
      for (var i=0;i<puzzlep.length;i++){
        blank = puzzlep[i].innerHTML;
         if (puzzlep[i].innerHTML == ""){
          puzzlep[i].innerHTML = move;
          this.innerHTML = blank;

          puzzlep[i].style.border = "2px solid black";
          puzzlep[i].style.backgroundImage = "url(background.jpg)";
          puzzlep[i].style.backgroundSize = "400px 400px";  
          
        
        this.style.backgroundImage = "none";
        this.style.border = "2px solid white";

        mopiece();
        puzzlep[i].style.backgroundPosition = "-"+backPiece[move-1][0]+"px -"+backPiece[move-1][1]+"px";
      }
    
     }
  
   }
         }


var mopiece = function(){
	var puzzlep = $$("#puzzlearea div");
	for (var i=0;i<puzzlep.length;i++){
		puzzlep[i].removeClassName("movablepiece");
	}
		for (var i=0; i<puzzlep.length; i++){

  			if (puzzlep[i].innerHTML == ""){
          
  				  puzzlep[i].removeClassName("movablepiece");
          
  				switch(i){
  					case 0:
  						puzzlep[i+1].addClassName("movablepiece");
  						puzzlep[i+4].addClassName("movablepiece");
              //alert("in mopiece loop");
  						break;
  					case 1:
  					case 2:
  						puzzlep[i-1].addClassName("movablepiece");
  						puzzlep[i+1].addClassName("movablepiece");
  						puzzlep[i+4].addClassName("movablepiece");
              //alert("in mopiece loop");
  						break;
  					case 3:
  						puzzlep[i-1].addClassName("movablepiece");
  						puzzlep[i+4].addClassName("movablepiece");
              //alert("in mopiece loop");
  						break;
  					case 4:
  						puzzlep[i-4].addClassName("movablepiece");
  						puzzlep[i+4].addClassName("movablepiece");
  						puzzlep[i+1].addClassName("movablepiece");
              //alert("in mopiece loop");
  						break;
  					case 5:
  					case 6:
  					case 9:
  					case 10:
  						puzzlep[i-4].addClassName("movablepiece");
  						puzzlep[i+4].addClassName("movablepiece");
  						puzzlep[i+1].addClassName("movablepiece");
  						puzzlep[i-1].addClassName("movablepiece");
  						//alert("in mopiece loop");
              break;
  					case 7: 
  					case 11:
  						puzzlep[i-4].addClassName("movablepiece");
  						puzzlep[i+4].addClassName("movablepiece");
  						puzzlep[i-1].addClassName("movablepiece");
  						//alert("in mopiece loop");
              break;
  					case 8:
  						puzzlep[i-4].addClassName("movablepiece");
  						puzzlep[i+1].addClassName("movablepiece");
  						puzzlep[i+4].addClassName("movablepiece");
              //alert("in mopiece loop");
  						break;
  					case 12:
  						puzzlep[i-4].addClassName("movablepiece");
  						puzzlep[i+1].addClassName("movablepiece");
              //alert("in mopiece loop");
  						break;
  					case 13: 
  					case 14:
  						puzzlep[i-4].addClassName("movablepiece");
  						puzzlep[i-1].addClassName("movablepiece");
  						puzzlep[i+1].addClassName("movablepiece");
              //alert("in mopiece loop");
  						break;
  					case 15:
  						puzzlep[i-4].addClassName("movablepiece");
  						puzzlep[i-1].addClassName("movablepiece");
              //alert("in mopiece loop");
  						break;
  					}

        	
  		}

      Event.observe(puzzlep[i], 'click', movepiece); }  

  	}	
