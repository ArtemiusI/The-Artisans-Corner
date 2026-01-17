function closeAllDropdowns() {
  // Get all dropdown elements
  const dropdowns = document.querySelectorAll('.dropdown-menu');

  // Loop through and hide each dropdown
  dropdowns.forEach(dropdown => {
    // Find the parent dropdown element
    const parentDropdown = dropdown.closest('.dropdown');
    if (parentDropdown) {
      // Use Bootstrap's Dropdown API to hide it
      const dropdownInstance = bootstrap.Dropdown.getInstance(parentDropdown.querySelector('[data-bs-toggle="dropdown"]'));
      if (dropdownInstance) {
        dropdownInstance.hide();
      } else {
        // If no instance, create one and hide (for cases where it might be needed)
        new bootstrap.Dropdown(parentDropdown.querySelector('[data-bs-toggle="dropdown"]')).hide();
      }
    }
  });

  // Also ensure the mobile navbar collapse menu is closed (optional, for navbar links)
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
    if (collapseInstance) {
      collapseInstance.hide();
    }
  }
}