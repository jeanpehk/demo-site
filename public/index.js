{
    let modal = document.getElementById("modal");
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

    let span = document.getElementById("span-close");
    span.onclick = () => {
        modal.style.display = "none";
    };
};

// Might need something like this for some stuff e.g. if need to wait for some images to fully load first.
//window.addEventListener("load", (event) => {
//});

/* THIS is some SPA messing around, do for fun later but first get a server side version to work since it's simpler.

const app = document.getElementById("app");

const nav = document.getElementsByClassName("nav-list-a");

const about = "<p>about<p/>"
const contact = "<p>contact<p/>"

const routes = {
    "#about": about,
    "#contact": contact,
};

window.addEventListener("hashchange", () => {
    console.log("HASHCHANGE");
    const hash = window.location.hash || "#/";
    console.log("hash:", hash);
    const content = routes[hash];
    if (content) {
        console.log("content:", content);
        // @Note: never use anything that accepts user input in innerHTML.
        app.innerHTML = content;
    }
});

window.addEventListener("load", () => {
    console.log("load");
});

for (const a of nav) {
    a.addEventListener("click", () => {
        console.log(a.id);
    });
}
*/