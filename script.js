const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function handleSearch() {
    const query = searchInput.value.trim();
    if (query) {
        console.log("Bạn tìm kiếm:", query);
        alert("Bạn tìm kiếm: " + query);
        searchInput.value = "";
    }
}

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') handleSearch();
});
