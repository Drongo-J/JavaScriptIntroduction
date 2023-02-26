function CallFunction(){
    alert(document.body.innerHTML);     
}

// function CallApple(){
//     let appleElement = document.getElementById("apple");
//     appleElement.innerHTML="Apple Clicked";
// }

// function CallMango(){
//     let mangoElement = document.getElementById("mango");
//     mangoElement.innerHTML="Mango Clicked";
// }

// function CallWaterMelon(){
//     let waterMelonElement = document.getElementById("waterMelon");
//     waterMelonElement.innerHTML="Water Melon Clicked";
// }

var isClicked = false;

function Call(id){
    let element = document.getElementById(id);
    if (!isClicked){
        element.innerHTML= element.innerHTML+ " Clicked";
        isClicked = true;
    }
    else{
        element.innerHTML= "";
    }   
}

var lightIsOn = false;
var lightElement = document.getElementById('light');

function Turn(){
    if (!lightIsOn){
        lightElement.src ="Images/lightOn.png"
    }
    else{
        lightElement.src ="Images/lightOff.png"
    }
    lightIsOn = !lightIsOn;
}


// let x = 10;
// let y = 20;

// var name = "Tural";

let isDark = false;

function Turn(){
    let myBody = document.body;
    let header = document.getElementById("header")

    if (!isDark){
        myBody.classList.remove("light-body");
        myBody.classList.add("dark-body");
        header.classList.remove("light-header");
        header.classList.add("dark-header");
    }
    else{
        myBody.classList.add("light-body");
        myBody.classList.remove("dark-body");
        header.classList.add("light-header");
        header.classList.remove("dark-header");
    }


    isDark = !isDark;
}

function main(){
    // alert(x + y);

    // document.write(x + y);

    // const pi = 3.14;
    // pi = 5 // error
    // console.log(pi)

    // let name = "Aykhan";
    // let name="Tural";

    // console.log(name);

    // let name = "John";
    // let surname = "Johnlu";
    // console.log(name + " " + surname);

}

main();
// console.log(name);