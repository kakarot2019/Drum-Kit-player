var n=document.querySelectorAll(".drum").length;

//addeventlistener attaches the function all .drum class using loops and when these buttons are pressed 
//this.innerHTML returns the content of that class who triggered the click function i.e, w,d,k,etc  
for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
     {
        playsound(this.innerHTML);

    });
}

// this one handles whenever a key is pressed throughout the document("document" is used) and 
//takes event as a parameter to get that key which is being pressed using "event.key"
document.addEventListener("keydown", function(event){
    playsound(event.key);
})

//this none handles sound being played after pressing or clicking 
//we add one extra class "pressed" to highlight button being pressed which is styled using css
//we remove the class after few sec to create flash effect using setTimeOut()
//uses switch case to play different sounds for various buttons
//the content is received in "key"

function playsound(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);

    switch(key){
        case "w":
            var aud=new Audio("sounds/tom-1.mp3");
            aud.play();
            break;
        case "a":
            var aud=new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
        case "s":
            var aud=new Audio("sounds/tom-3.mp3");
            aud.play();
            break;
        case "d":
            var aud=new Audio("sounds/tom-4.mp3");
            aud.play();
            break;
        case "j":
            var aud=new Audio("sounds/snare.mp3");
            aud.play();
            break;
        case "k":
            var aud=new Audio("sounds/crash.mp3");
            aud.play();
            break;
        case "l":
            var aud=new Audio("sounds/kick-bass.mp3");
            aud.play();
            break;
                                                
        default:
            break;
    }

}

