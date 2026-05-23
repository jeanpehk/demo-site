import { addDefaultFlexContainerStyles } from "./utils.js";

export const Header = (height) => {
    const header = document.createElement("header");

    // We use this for class level manipulations.
    const headerStyle = document.createElement("style");
    header.appendChild(headerStyle);

    header.style.position = "sticky";
    header.style.top = "0";
    header.style.width = "100%";
    // @Todo
    header.style.height = height;
    header.style.zIndex = "1000";
    header.style.marginTop = "0px";
    header.style.marginBottom = "0px";
    header.style.paddingTop = "0px";
    header.style.paddingBottom = "0px";
    header.style.backgroundColor = "white";

    { // Create the header container div.
        const container = document.createElement("div");
        container.id = "header-container";

        // Container style
        container.style.margin = "0px";
        container.style.padding = "0px";
        container.style.height = "100%";
        container.style.borderBottom = "solid";
        container.style.borderWidth = "1px";
        container.style.borderColor = "#E0E0E0";

        // @Temp
        /*
        container.style.scrollMarginTop = "var(--header-height)";
        */

        addDefaultFlexContainerStyles(container, "column");

        header.appendChild(container);

        { // Create the navbar.
            const nav = document.createElement("nav");
            nav.className = container.id + "-item";

            {
                const ul = document.createElement("ul");
                ul.id = "nav-ul-container";

                addDefaultFlexContainerStyles(ul, "row");

                ul.style.margin = "0px";
                ul.style.padding = "0px";
                ul.style.listStylePosition = "inside";
                ul.style.listStyleType = "none";

                const liClassName = ul.id + "-item";
                const aClassName = "nav-li-a";

                headerStyle.textContent += `
                   .${aClassName} {
                       margin: 0px;
                       padding: 4px;
                       text-decoration: none;
                       transition: 0.1s;
                       color: gray;
                   }
                `;

                 headerStyle.textContent += `
                   .${aClassName}:hover {
                       color: black;
                   }
                `;

                const addLi = (aHref, aText) => {
                    const li = document.createElement("li");
                    li.className = liClassName;

                    const a = document.createElement("a");
                    a.className = aClassName;
                    a.href = aHref;
                    a.text = aText;

                    li.appendChild(a);

                    ul.appendChild(li);
                };

                // @Todo:
                addLi("#about", "About");
                addLi("#illustrations", "Illustrations");
                addLi("#contact", "Contact");

                nav.appendChild(ul);
            }

            container.appendChild(nav);
        }
    }

    return header;
}