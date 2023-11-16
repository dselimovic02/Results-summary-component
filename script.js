/*Changes line break location according to viewport width*/

let rightParagraph = document.querySelector(".summary p");

function paragraph(){
    if(window.innerWidth <= 375){
        rightParagraph.innerHTML = "You scored higher than 65% of the<br>people who have taken these tests.";
    }else{
        rightParagraph.innerHTML = "You scored higher than 65% of <br> the people who have taken <br> these tests."
    }

}

window.onload = paragraph;
window.addEventListener("resize", paragraph);


