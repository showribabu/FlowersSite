const flowers = [
    { name: 'Arum Lily', image: 'images/Arum Lily.jpg', description: '' },
    { name: 'Barberton', image: 'images/Barberton.jpg', description: '' },
    { name: 'Busy Lizzie', image: 'images/Busy Lizzie.jpg', description: '' },
    { name: 'Columbine', image: 'images/Columbine.jpg', description: '' },
    { name: 'Coneflower', image: 'images/Coneflower.jpg', description: '' },
    { name: 'Cornflower', image: 'images/Cornflower.jpg', description: '' },
    { name: 'Daffodil', image: 'images/Daffodil.jpg', description: '' },
    { name: 'Forget-me-not', image: 'images/Forget-me-not.jpg', description: '' },
    { name: 'Foxglove', image: 'images/Foxglove.jpg', description: '' },
    { name: 'Gay feather', image: 'images/Gay feather.jpg', description: '' },
    { name: 'Grape hyacinth', image: 'images/Grape hyacinth.jpg', description: '' },
    { name: 'Iris', image: 'images/Iris.jpg', description: '' },
    { name: 'Rose', image: 'images/Rose.jpg', description: '' },
    { name: 'Tulip', image: 'images/Tulip.jpg', description: '' }
    
];

function displayFlowers(flowerArray, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    flowerArray.forEach(flower => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.innerHTML = `
            <div class="card">
                <img src="${flower.image}" class="card-img-top" alt="${flower.name}">
                <div class="card-body">
                    <h5 class="card-title">${flower.name}</h5>
                    <p class="card-text">${flower.description}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        displayFlowers(flowers, 'featuredFlowers');
        
        searchBar.addEventListener('input', (e) => {
            const searchString = e.target.value.toLowerCase();
            const filteredFlowers = flowers.filter(flower => flower.name.toLowerCase().includes(searchString));
            displayFlowers(filteredFlowers, 'featuredFlowers');
        });
    } else if (document.getElementById('allFlowers')) {
        displayFlowers(flowers, 'allFlowers');
    }
});
