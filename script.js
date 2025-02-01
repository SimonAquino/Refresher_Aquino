document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded");

    const sections = document.querySelectorAll("section");
    const dialogueBar = document.createElement("div");
    dialogueBar.classList.add("dialogue-bar");


    const dialogueText = document.createElement("span");
    dialogueText.classList.add("dialogue-text");
    dialogueBar.appendChild(dialogueText);

    document.body.appendChild(dialogueBar);

    const sectionTexts = {
        "about": "Welcome to my little coffee shop corner of the internet! I'm so glad you're here and I hope you enjoy learning a bit more about me.",
        "education": "Learn about my Education",
        "experience": "Check out my Experience",
        "skills": "Discover my Skills",
        "projects": "See my Projects",
        "contact": "Get in touch with me"
    };

    function updateDialogue() {
        let currentSection = "about";
        let minDistance = Infinity;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < minDistance) {
                minDistance = rect.top;
                currentSection = section.id;
            }
        });

        dialogueText.textContent = sectionTexts[currentSection];
    }

    window.addEventListener("scroll", updateDialogue);
    updateDialogue();

    document.querySelectorAll(".nav-buttons img").forEach(button => {
        button.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});

document.addEventListener("scroll", function () {
    const dialogueBar = document.querySelector(".dialogue-bar");
    const sections = document.querySelectorAll("section");
    let currentSection = "";
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id;
        }
    });

    if (["skills", "projects", "contact"].includes(currentSection)) {
        dialogueBar.style.background = "url('LightDialogueBar.png') no-repeat center center";
    } else {
        dialogueBar.style.background = "url('DarkDialogueBar.png') no-repeat center center";
    }

    dialogueBar.style.backgroundSize = "cover";
});
