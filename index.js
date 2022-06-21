const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let btnOne = document.getElementById("btn-one")
let btnTwo= document.getElementById("btn-two")
let passwordBtn = document.getElementById("passwordBtn")

passwordBtn.addEventListener( "click",function() {
        
        let randomIndex1 = [...characters].sort(() => 0.5 - Math.random()).slice(0, 15).join("")
        let randomIndex2 = [...characters].sort(() => 0.5 - Math.random()).slice(0, 15).join("")
         btnOne.textContent = [randomIndex1]
         btnTwo.textContent = [randomIndex2]
})

