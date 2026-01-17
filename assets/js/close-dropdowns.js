$(document).ready(function() {
    // Handle clicks on links with the 'close-dropdown' class
    $('.close-dropdown').on('click', function(event) {
        // Find the parent dropdown menu and hide it
        $(this).closest('.dropdown-menu').removeClass('show');
        // Find the dropdown toggle button and update its aria-expanded attribute
        $(this).closest('.dropdown').find('.dropdown-toggle').attr('aria-expanded', false);
    });
});