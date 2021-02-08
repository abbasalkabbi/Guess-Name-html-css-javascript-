var date_Name=["Ali","Abbas","Ahmed","hassin","hora"];
var noValue=document.getElementById("wroing");
var win=document.getElementById("win");
var lose=document.getElementById("lose");
var attempt=5;


var r=Math.ceil(Math.random()*4);
var random_name=date_Name[r-1].toLowerCase();
function play(){
    var guess_name=document.getElementById("input").value.toLowerCase();
    
    if(guess_name){
        noValue.innerHTML=""
        console.log(random_name)
        console.log(r)
        var result=random_name==guess_name;
        console.log(result);
        if(result){
            
            win.innerHTML="your win" ;
            lose.innerHTML="";
            r=Math.ceil(Math.random()*4);
            random_name=date_Name[r-1].toLowerCase();
            console.log(r)
        }else{
            win.innerHTML="" ;
            var split_input=guess_name.split("");
            var split_random=random_name.split("");
            attempt--;
            console.log("attempt"+attempt)
            var total=0;
            
            switch(attempt){
                case 4: 
                   var heart1=document.getElementById("1");
                   heart1.style.display="none";
                break;
                case 3:
                   var heart1=document.getElementById("2");
                   heart1.style.display="none";
                break;
                case 2:
                   var heart1=document.getElementById("3");
                   heart1.style.display="none";
                break;
                case 1:
                    var heart1=document.getElementById("4");
                   heart1.style.display="none";
                break;
                case 0:
                   var heart1=document.getElementById("5");
                   heart1.style.display="none";
                   window.location="indexGameOver.html"
                break;
    
            }
    
            var correct_letters=[];
            split_input.forEach(element => {
                if(split_random.includes(element)){
                correct_letters.push(element);
                 total+=1
                 
                 lose.innerHTML='this wrong'+'('+total+')'+'letters are correct'+'('+correct_letters.join("-")+')';
                }
            });
            
          
        }
    }else{
        
        noValue.innerHTML="Please write Name"
    }
    
    
}

//this is code indexGameOver.html

function playagain(){
    window.location="index.html"
}

