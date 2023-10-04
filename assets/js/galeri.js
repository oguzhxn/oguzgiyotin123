const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
        const imgSrc = item.querySelector("img").src;
        window.open(imgSrc, "_blank");
    });
});