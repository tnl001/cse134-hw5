window.addEventListener("load", init);

function init() {
    let alertBtn = document.getElementById("alert-btn");
    let confirmBtn = document.getElementById("confirm-btn");
    let promptBtn = document.getElementById("prompt-btn");
    let safePromptBtn = document.getElementById("safe-prompt-btn");
    let resultText = document.getElementsByTagName("output")[0];

    // Alert button
    alertBtn.addEventListener("click", () => {
        resultText.innerHTML = "";
        setTimeout(() => {
            alert("Alert pressed!");
        }, 0);
    });

    // Confirm button
    confirmBtn.addEventListener("click", () => {
        resultText.innerHTML = "";
        let confirmResult;
        setTimeout(() => {
            confirmResult = confirm("Do you want to confirm this?");
        }, 0);
        setTimeout(() => {
            resultText.innerHTML = `The value returned by the confirm method is: ${confirmResult}`;
        }, 0);
    });

    // Prompt button
    promptBtn.addEventListener("click", () => {
        resultText.innerHTML = "";
        let promptResult;
        setTimeout(() => {
            promptResult = prompt("What is your name?");
        }, 0);
        setTimeout(() => {
            if (promptResult != null && promptResult != "") {
                resultText.innerHTML = `Prompt result: ${promptResult}`;
            } else if (promptResult == null || promptResult == "") {
                resultText.innerHTML = "User didn't enter anything";
            }
        }, 0);
    });

    // Safer prompt button
    safePromptBtn.addEventListener("click", () => {
        resultText.innerHTML = "";
        let promptResult;
        setTimeout(() => {
            promptResult = prompt("What is your name?");
        }, 0);
        setTimeout(() => {
            promptResult = DOMPurify.sanitize(promptResult);
            if (promptResult != null && promptResult != "") {
                resultText.innerHTML = `Prompt result: ${promptResult}`;
            } else if (promptResult == null || promptResult == "") {
                resultText.innerHTML = "User didn't enter anything";
            }
        }, 0);
    });
}