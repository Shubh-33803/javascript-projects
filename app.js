let btn = document.querySelector("#btn");
let btn_content = document.querySelector("#btn_content");
let mic = document.querySelector("#mic");


function speak(text) {
    let speak_text = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speak_text);
}

function greet() {
    let Time = new Date();
    let hours = Time.getHours();

    if (hours >= 0 && hours < 12) {
        speak("Good morning,sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good afternoon,sir");
    } else if (hours >= 16 && hours < 20) {
        speak("Good evening,sir");
    } else if (hours >= 20 && hours <= 24) {
        speak("Good night,sir");
    }

}


window.addEventListener("load", () => {
    greet();
});


let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognise = new speechRecognition();

recognise.onresult = (event) => {

    let main_text = event.results[0][0].transcript;
    btn_content.innerText = main_text;
    console.log(main_text);
    take_command(main_text.toLowerCase());
}


// click button for command---
btn.addEventListener("click", () => {
    recognise.start();
    btn.style.display = "none";
    mic.style.display = "block";
});

// take text input what i want to say to Algo---
function take_command(message) {
    btn.style.display = "flex";
    mic.style.display = "none";

    if (message.includes("hello Algo") || message.includes("hey") || message.includes("hii algo")) {
        speak("hello sir, how can i help you! ");
    }
    else if (message.includes("who are you") || message.includes("Who is your creator?") || message.includes("who is your father") || message.includes("hu r u")) {
        speak("i am a vertual assistant, created by Shubham Sharma");
    }
    else if (message.includes("open youtube") || message.includes("youtube")) {
        speak("Opening youtube...");
        window.open("https://www.youtube.com", "_blank");
    }
    else if (message.includes("open facebook") || message.includes("facebook")) {
        speak("opening facebook...");
        window.open("https://www.facebook.com", "_blank");
    }
    else if (message.includes("open instagram") || message.includes("instagram")) {
        speak("opening instagram...");
        window.open("https://www.instagram.com/", "_blank");
    }
    else if (message.includes("open twitter") || message.includes("twitter")) {
        speak("opening twitter...");
        window.open("https://x.com/", "_blank");
    }
    else if (message.includes("open snapchat") || message.includes("snapchat")) {
        speak("opening snapchat...");
        window.open("https://www.snapchat.com/", "_blank");
    }
    else if (message.includes("open pinterest") || message.includes("pinterest")) {
        speak("opening pinterest...");
        window.open("https://www.pinterest.com/", "_blank");
    }
    else if (message.includes("open whatsapp") || message.includes("whatsapp")) {
        speak("opening whatsapp...");
        window.open("whatsapp://");
    }
    else if (message.includes("open telegram") || message.includes("telegram")) {
        speak("opening telegram...");
        window.open("https://www.telegram.org/", "_blank");
    }
    else if (message.includes("open quora") || message.includes("quora")) {
        speak("opening quora...");
        window.open("https://www.quora.com/", "_blank");
    }
    else if (message.includes("open discord") || message.includes("discord")) {
        speak("opening discord...");
        window.open("https://discord.com/", "_blank");
    }
    else if (message.includes("open medium") || message.includes("medium")) {
        speak("opening medium...");
        window.open("https://medium.com/", "_blank");
    }
    else if (message.includes("open chatgpt") || message.includes("chatgpt")) {
        speak("opening chatgpt...");
        window.open("https://chatgpt.com/", "_blank");
    }
    else if (message.includes("open playstore") || message.includes("playstore")) {
        speak("opening playstore...");
        window.open("https://play.google.com/store/games?device=windows", "_blank");
    }
    else if (message.includes("open calculator") || message.includes("calculator")) {
        speak("opening calculator...");
        window.open("calculator://");
    }
    else if (message.includes("time") || message.includes("what is time")) {
        let speak_time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(speak_time);
    }
    else if (message.includes("date") || message.includes("what is date")) {
        let speak_date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(speak_date);
    }
    else {
        speak(`what i found about ${message} on internet`);
        window.open(`https://www.google.com/search?q= ${message} `, "_blank");
    }
}