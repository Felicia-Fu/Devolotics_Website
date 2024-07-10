// Function to fetch and display images with lazy loading
function outreachPhotos_display(folder, imagesNum, elementId) {
    const path = `https://res.cloudinary.com/dfcuj6dei/image/upload/v1708278573/Outreach/${folder}/`;
    const imageContainer = document.getElementById(elementId);
    const lightboxContainer = document.getElementById("lightboxContainer");
    const lightboxImg = document.getElementById("lightboxImg");

    for (let i = imagesNum; i > 0; i--) {
        const imgContainer = document.createElement("div");
        imgContainer.className = "photos_item";

        const img = document.createElement("img");
        img.dataset.src = `${path}${i}.jpg`;
        img.className = "lazy"; // Add a class for styling if needed
        img.src = "/assets/icons/loading.gif";

        img.addEventListener("click", () => {
            lightboxContainer.style.display = "flex";
            lightboxImg.src = img.src;
        });

        imgContainer.appendChild(img);
        imageContainer.appendChild(imgContainer);
    }

    // Initialize the Intersection Observer for lazy loading
    const lazyImages = document.querySelectorAll(".lazy");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Load the image
                img.classList.remove("lazy"); // Remove the lazy class
                observer.unobserve(img); // Unobserve the image
            }
        });
    });

    lazyImages.forEach((image) => {
        observer.observe(image);
    });

    lightboxContainer.addEventListener("click", () => {
        lightboxContainer.style.display = "none";
    });
}

// Usage: Call the function with the path to the folder containing image URLs
outreachPhotos_display("International%20workshops", 5, "world_imgc");
outreachPhotos_display("Summer%20Bot%20Camps", 10, "sbc_imgc");
outreachPhotos_display("Toronto%20Public%20Library", 11, "tpl_imgc");
outreachPhotos_display("School%20Workshops", 7, "schools_imgc");
outreachPhotos_display("Community%20Centers", 10, "crc_imgc");
