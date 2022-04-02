document.getElementById("tableOfContentButton").addEventListener("click", tableOfContentClose);

function tableOfContentClose() {
    if (document.getElementById("tableOfContentButton").textContent === "閉じる") {
        setTimeout(() => {
            document.getElementById("tableOfContentLetter").style.marginTop = "0px";
        }, 0);
        setTimeout(() => {
            document.getElementById("tableOfContentLetter").style.display = "none";
            document.getElementById("tableOfContent").style.width = "25%";
            document.getElementById("tableOfContentButton").textContent = "開く";
        }, 50);
    } else {
        if (document.getElementById("tableOfContentButton").textContent === "開く") {
            document.getElementById("tableOfContentLetter").style.display = "block";
            document.getElementById("tableOfContent").style.width = "70%";
            document.getElementById("tableOfContentButton").textContent = "閉じる";
            setTimeout(() => {
                document.getElementById("tableOfContentLetter").style.marginTop = "10px";
            }, 0);
        }
    }
}