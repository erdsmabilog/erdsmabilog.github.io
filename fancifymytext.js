makeBigger = () => {
    // make text area font size 24pt = 32px = 2rem (1 rem = 16px)
    document.getElementById("textInput").style.fontSize = "2rem";
}

makeFancy = () => {
    // reduce queries by saving reference in const var
    const textArea = document.getElementById("textInput");
    // make text area styling fancy
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

makeBoring = () => {
    // reduce queries by saving reference in const var
    const textArea = document.getElementById("textInput");
    // make text area styling boring
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

makeUpper = () => {
    // reduce queries by saving reference in const var
    const textArea = document.getElementById("textInput");
    // split text area into sentences (noted by .)
    var sentences = textArea.value.split(".");
    // make each sentence fully upper case before making the last word of each end in -Moo
    textArea.value = (sentences.map(sentence => sentence.toUpperCase())).join("-Moo.");
}