document.querySelectorAll(".sidebar ul li a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // Remove active class from all links
    document.querySelectorAll(".sidebar ul li a").forEach((item) => {
      item.classList.remove("active");
    });

    // Hide all content sections
    document.querySelectorAll(".settings-content").forEach((content) => {
      content.classList.remove("active");
    });

    // Add active class to the clicked link
    link.classList.add("active");

    // Show the corresponding content section
    const sectionId = link.getAttribute("href");
    document.querySelector(sectionId).classList.add("active");
  });
});

// Ensure the first tab is shown when the page loads
document.querySelector(".sidebar ul li a").click();
