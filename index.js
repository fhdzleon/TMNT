//-------- IMAGES LOOP --------------------

const array = [
  "miguelAngel.png",
  "leonardo.png",
  "rafael.png",
  "donatelo.png",
  "splinter.png",
  "abril.png",
  "Bebop.png",
  "rocoso.png",
  "destructor.png",
  "krank.png",
];

let index = 0;
const changeButton = document.getElementById("changeButton");

const imageLoop = () => {
    const imgLoader = document.getElementById("imgLoader")
    imgLoader.src = `./assets/${array[index]}`
    index++;

    if(index >= array.length ) {
        index = 0;   
    }
}   

changeButton.addEventListener('click', imageLoop);


//-------- DISPLAY USER -------------------

const userButton = document.getElementById("userButton");

const displayUser = () => {
  const userInput = document.getElementById("userInput");
  const user = document.getElementById("user");

  const userName = userInput.value;

  user.textContent = `Gracias por visitar la pagina ${userName}`;

  userInput.value = " ";
};

userButton.addEventListener("click", displayUser);
