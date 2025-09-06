function updateParagraph() {
    document.getElementById("text").textContent = 
    "This hobby keeps me inspired and helps me improve my creativity.";
}

function addListItem() {
    const list = document.getElementById("list");
    const newItem = document.createElement("li");
    newItem.textContent = "List Item";
    list.appendChild(newItem);
}

function removeParagraph() {
    const paragraph = document.getElementById("text");
    if (paragraph) {
        paragraph.remove();
    }
}
