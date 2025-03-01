// Background Color Changer
const body = document.getElementById("body");
const bgChangeBtn = document.getElementById("bg-btn");

function colorChanger() {
    const letter = "0103dffc";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 8)];
    }
    return color;
}

bgChangeBtn.addEventListener("click", function () {
    const newColor = colorChanger();
    body.style.backgroundColor = newColor;
});

// Today Date
const today = new Date();
const formattedDate = today.toDateString();
document.getElementById("todays-date").innerText = formattedDate;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = days[today.getDay()];
document.getElementById("current-day").innerText = dayName;

// Show Time Function
function showTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds} ${amPm}`;
}

//all buttons
const taskNumber = document.getElementById("task-number");
const numCounter = document.getElementById("num"); 
const smsContainer = document.getElementById("sms-title"); 
const clearButton = document.getElementById("clear"); 
const buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
        const clickedButton = event.target; 

        if (clickedButton.id === "bg-btn" || clickedButton.id === "clear") return;
        alert("Board Updated Successfully");

        let currentNumber = parseInt(taskNumber.innerText, 10);
        if (currentNumber > 0) {
            taskNumber.innerText = currentNumber - 1;
        }

        if (parseInt(taskNumber.innerText, 10) === 0) {
            alert("🎉 Congratulations! All tasks are completed.");
        }
        let numValue = parseInt(numCounter.innerText, 10);
        numCounter.innerText = numValue + 1;

        
        const cardBody = clickedButton.closest(".card-body");
        const cardTitleElement = cardBody ? cardBody.querySelector(".card-title") : null;

        if (cardTitleElement) {
            const cardTitle = cardTitleElement.innerText;
            const time = showTime();

            const newMessage = document.createElement("p");
            newMessage.innerHTML = `
                <div class="text-center mt-5 text-left bg-[#F4F7FF] p-8 text-gray-600 rounded-lg mb-5">
                    ✅ You have completed the task "<strong>${cardTitle}</strong>" at <strong>${time}</strong>.
                </div>`;
            smsContainer.appendChild(newMessage);
        }

        clickedButton.disabled = true; 
    });
}
clearButton.addEventListener("click", function () {
    smsContainer.innerHTML = ""; })