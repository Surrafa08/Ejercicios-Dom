function searchTable() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const table = document.getElementById('dictionaryTable');
    const rows = table.getElementsByTagName('tr');
    let resultCount = 0;

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let rowContainsSearchValue = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].innerText.toLowerCase().includes(searchValue)) {
                rowContainsSearchValue = true;
                break;
            }
        }

        if (rowContainsSearchValue) {
            rows[i].style.display = '';
            resultCount++;
        } else {
            rows[i].style.display = 'none';
        }
    }

    document.getElementById('resultCount').innerText = `Resultados: ${resultCount}`;
}