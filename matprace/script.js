
const filterInput = document.getElementById('filter-mesto');
filterInput.addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const city = row.cells[1].textContent.toLowerCase();
        row.style.display = city.includes(filter) ? '' : 'none';
    });
});


const selectFilter = document.getElementById('filter-select');
const selectMenu = document.getElementById('vyber-mesto');
const originalOptions = Array.from(selectMenu.options);

selectFilter.addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    selectMenu.innerHTML = '';

    originalOptions.forEach(option => {
        if (option.text.toLowerCase().includes(filter)) {
            selectMenu.appendChild(option.cloneNode(true));
        }
    });

    if (!filter) {
        originalOptions.forEach(option => {
            selectMenu.appendChild(option.cloneNode(true));
        });
    }
});

const form = document.getElementById('vyber-formular');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedCity = selectMenu.value;
    alert(`Vybral jsi město: ${selectedCity}`);
});
