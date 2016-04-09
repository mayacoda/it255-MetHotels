// self-initializing function that will run when the file loads
// used to avoid polluting the global namespace

(function() {

    // logic to open sub menus for navigation items

    var items = document.getElementsByClassName('menu-item');
    var openedDropdown = null;

    // attach listener to each menu item
    for (var i = 0; i < items.length; i++) {
        var item = items[i];

        item.addEventListener('click', function(e) {
            e.preventDefault();

            // close any opened dropdown, if it exists
            _closeDropdown();

            // get dropdown element
            var dropdown = e.target.parentElement.getElementsByClassName('dropdown')[0];
            // check if menu item has sub menu
            if (dropdown) {
                dropdown.setAttribute('style', 'display: block');
                openedDropdown = dropdown;
            }

        }, false);
    }

    // attach listener to body to close dropdown when clicking outside the element
    document.body.addEventListener('click', function (e) {
        if (!e.target.parentNode.classList.contains('menu-item')) {
            _closeDropdown()
        }
    }, false);

    function _closeDropdown() {
        if (openedDropdown) {
            openedDropdown.setAttribute('style', 'display: none');
            openedDropdown = null;
        }
    }

})();