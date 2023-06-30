const username = document.getElementById("user");
const password = document.getElementById("pass");
const demo = document.getElementById("demo");
const resetButton = document.createElement("button");
resetButton.innerHTML = "Reset";
resetButton.addEventListener("click", () =>{
    username.value = "";
    password.value = "";
    demo.innerHTML = "";
});
document.body.appendChild(resetButton);
resetButton.style.cssText = "text-align: center;";
function loginform(){
    const userInput = username.value;
    const passInput = password.value;
    if(userInput == "username" && passInput == "password"){
        demo.innerHTML +=`<p>success</p>`;
        demo.innerHTML = "<p style='color:red'>success</p>";
    }
    else{
        demo.innerHTML += `<p>Please try again oun sml</p>`
        demo.innerHTML = "<p style='color:red'>Please try again oun sml</p>";
        var audio = new Audio ('Frog Laughing - Sound Effect_256k.mp3');
        audio.play();
    }
}