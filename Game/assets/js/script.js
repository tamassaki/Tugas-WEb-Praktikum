// mengambil semua element a dengan looping 
document.querySelectorAll("#option a").forEach((a) => {
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})
function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // membuat array pilihan untuk computer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk computer
    pilihanComputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;


    // jika pilihan komputer sama dengan pilihan user (Draw)
    if(pilihanUser == pilihanComputer){
        alert("DRAW");
    }

    // Jika pilihan user yang menang
    if(pilihanUser == "Rock" && pilihanComputer == "Scissors"){
        alert("YOU WIN");
    }else if (pilihanUser == "Paper" && pilihanComputer == "Rock"){
        alert("YOU WIN");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Paper"){
        alert("YOU WIN");
    }

    // jika pilihan komputer yang menang
    if(pilihanUser == "Rock" && pilihanComputer == "Paper"){
        alert("COMPUTER WIN");
    }else if (pilihanUser == "Paper" && pilihanComputer == "Scissors"){
        alert("COMPUTER WIN");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Rock"){
        alert("COMPUTER WIN");
    }
}
// menangkap semua elemen a
document.querySelectorAll("#option a").forEach((a) =>
    // jika di klick akan menjalankan fungsi computerChoice
    a.addEventListener("click", (e) => {
        computerChoice(e);
    })
)