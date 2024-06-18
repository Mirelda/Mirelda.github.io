document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".button-56");
    const dropdownContent = document.querySelector(".dropdown-content");

    // Butona tıklanınca menüyü aç/kapat
    button.addEventListener("click", function() {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    // Buton dışında bir yere tıklanınca menüyü kapat
    document.addEventListener("click", function(event) {
        if (!button.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    });
});
