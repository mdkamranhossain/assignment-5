// Background Color Changer

const body = document.getElementById("body");
const bgChangeBtn = document.getElementById("bg-btn");

function colorChanger (){
    let letter = "0103dffc";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 8)];
    }
    return color;
}

bgChangeBtn.addEventListener("click", function(){
    let newColor = colorChanger();
    body.style.backgroundColor = newColor;
})


// Today Date

    const today = new Date();
    const formattedDate = today.toDateString();
    document.getElementById("todays-date").innerText = formattedDate;   