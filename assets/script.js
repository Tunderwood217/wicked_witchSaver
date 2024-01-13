const searchForm = document.querySelector('.search');
const input = document.querySelector('input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchQuery = input.value;
console.log(searchQuery);    
});



