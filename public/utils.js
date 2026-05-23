export const addDefaultFlexContainerStyles = (container, direction) => {
    container.style.display = "flex";
    container.style.flexDirection = direction;
    container.style.flexWrap = "nowrap";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.alignContent = "center";
};