const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let inputOne = document.getElementById("input-one")
let inputTwo= document.getElementById("input-two")
let passwordBtn = document.getElementById("passwordBtn")

passwordBtn.addEventListener( "click",function() {
        
        let randomIndex1 = [...characters].sort(() => 0.5 - Math.random()).slice(0, 15).join("")
        let randomIndex2 = [...characters].sort(() => 0.5 - Math.random()).slice(0, 15).join("")
         inputOne.textContent = [randomIndex1]
         inputTwo.textContent = [randomIndex2]
         inputOne.select();
         inputOne.setSelectionRange(0, 99999);
         navigator.clipboard.writeText(inputOne.value)
         alert("copied text: " + inputOne.value)
         
})

