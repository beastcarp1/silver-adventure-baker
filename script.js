$(document).ready(function () {
    for (let i = 0; i < 3; i++) {
        let pillow = $(`<div class="pillow">Pillow ${i + 1}</div>`);
        $(".bed").append(pillow);

        let randomX = Math.random() * 120; 
        let randomY = Math.random() * 280; 

        pillow.css({
            position: "absolute",
            top: `${randomY}px`,
            left: `${randomX}px`,
            width: "70px",
            height: "40px",
            backgroundColor: "#FFDAB9", 
            color: "black",
            textAlign: "center",
            lineHeight: "30px",
            borderRadius: "10px",
            fontSize: "12px",
            boxShadow: "2px 2px 5px #888888",
        });
    }
});

$(document).ready(function () {
    $(".desk").draggable({
        stop: function (event, ui) {
            console.log(`Desk moved to X: ${ui.position.left}, Y: ${ui.position.top}`);
        }
    });
});

$("#seal").click(function () {
    console.log("Why are you upside down?");
});