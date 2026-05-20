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