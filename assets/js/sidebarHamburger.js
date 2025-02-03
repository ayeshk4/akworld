function toggleSidebar() {
    let sidebar = document.getElementById("main-side-bar");
    let hamburger = document.getElementById("hamburger");
    let closeIcon = document.getElementById("hamburgerClose");
    let iconContainerBar = document.getElementById("menuIconBar");
  
    if (sidebar.style.transform === "translateX(0px)") {
      sidebar.style.transform = "translateX(-100%)"; // Hide sidebar
      hamburger.style.display = "block"; // Show hamburger
      closeIcon.style.display = "none"; // Hide close icon
      iconContainerBar.style.backgroundColor = "#000"
    } else {
      sidebar.style.transform = "translateX(0px)"; // Show sidebar
      hamburger.style.display = "none"; // Hide hamburger
      closeIcon.style.display = "block"; // Show close icon
      iconContainerBar.style.backgroundColor = "#2B2F3B"
    }
  }
  
  // Handle screen resize for responsiveness
  function handleScreenResize() {
    let sidebar = document.getElementById("main-side-bar");
    let hamburger = document.getElementById("hamburger");
    let closeIcon = document.getElementById("hamburgerClose");
    let iconContainerBar = document.getElementById("menuIconBar");
  
    if (window.innerWidth > 1200) {
      sidebar.style.transform = "translateX(0px)"; // Ensure sidebar is visible
      hamburger.style.display = "none"; // Hide hamburger
      closeIcon.style.display = "none"; // Hide close icon
      iconContainerBar.style.backgroundColor = "#00000000"
    } else {
      sidebar.style.transform = "translateX(-100%)"; // Hide sidebar
      hamburger.style.display = "block"; // Show hamburger
      closeIcon.style.display = "none"; // Ensure close icon is hidden
      iconContainerBar.style.backgroundColor = "#000"
    }
  }
  
  // Listen for window resize
  window.addEventListener("resize", handleScreenResize);
  
  // Run on page load to set correct state
  handleScreenResize();
  

  // Close Sidebar When Clicking Outside
// ***********************************

// document.addEventListener("click", function(event) {
//     let sidebar = document.getElementById("main-side-bar");
//     let hamburger = document.getElementById("hamburger");
//     let closeIcon = document.getElementById("hamburgerClose");
  
//     // Check if the clicked element is NOT inside the sidebar or hamburger icons
//     if (!sidebar.contains(event.target) && !hamburger.contains(event.target) && !closeIcon.contains(event.target)) {
//       sidebar.style.transform = "translateX(-100%)";
//       hamburger.style.display = "block";
//       closeIcon.style.display = "none";
//     }
//   });