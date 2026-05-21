let modal = document.getElementById("modal");
let span = document.getElementById("span-close");

span.onclick = () => {
    modal.style.display = "none";
};

{
    let modal_img = document.getElementById("modal-img");

    let imgs = document.getElementsByClassName("thumbnail-image");
    let thumbnail_width = (100 / (imgs.length + 0)).toFixed(2);

    for (let img of imgs) {
        img.style.width = thumbnail_width.toString() + "%";

        img.onclick = () => {
            modal.style.display = "block";
            modal_img.src = img.src;
        };
    }
};

// You can also exit the modal with Escape.
document.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
        modal.style.display = "none";
    }
});