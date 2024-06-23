const flowers = [
    { name: 'Arum Lily', image: 'images/Arum Lily.jpg', description: 'Elegant white blooms with a unique funnel shape, symbolizing purity and sympathy.' },
    { name: 'Barberton', image: 'images/Barberton.jpg', description: 'Vibrant daisy-like flowers in various colors, representing cheerfulness and beauty.' },
    { name: 'Busy Lizzie', image: 'images/Busy Lizzie.jpg', description: 'Colorful, resilient flowers that brighten gardens with their vibrant hues, symbolizing motherly love.' },
    { name: 'Columbine', image: 'images/Columbine.jpg', description: 'Delicate, bell-shaped flowers in a variety of colors, symbolizing wisdom and strength.' },
    { name: 'Coneflower', image: 'images/Coneflower.jpg', description: 'Striking purple petals with a prominent cone center, known for their medicinal properties and beauty.' },
    { name: 'Cornflower', image: 'images/Cornflower.jpg', description: 'Bright blue flowers with a distinctive star-like shape, symbolizing hope and love.' },
    { name: 'Daffodil', image: 'images/Daffodil.jpg', description: 'Sunny yellow blooms heralding the arrival of spring, symbolizing new beginnings and rebirth.' },
    { name: 'Forget-me-not', image: 'images/Forget-me-not.jpg', description: 'Tiny blue flowers symbolizing true love and remembrance, adding charm to any garden.' },
    { name: 'Foxglove', image: 'images/Foxglove.jpg', description: 'Tall spikes of tubular flowers in various colors, known for their beauty and historical medicinal use.' },
    { name: 'Gay feather', image: 'images/Gay feather.jpg', description: 'Unique, fluffy purple spikes that add texture and interest to floral arrangements, symbolizing happiness.' },
    { name: 'Grape hyacinth', image: 'images/Grape hyacinth.jpg', description: 'Clusters of tiny, bell-shaped blue flowers resembling grapes, symbolizing trust and sincerity.' },
    { name: 'Iris', image: 'images/Iris.jpg', description: 'Elegant, sword-like petals in a rainbow of colors, symbolizing faith, hope, and wisdom.' },
    { name: 'Rose', image: 'images/Rose.jpg', description: 'Timeless symbols of love and beauty, roses come in a variety of colors, each with its own meaning.' },
    { name: 'Tulip', image: 'images/Tulip.jpg', description: 'Bright, cup-shaped flowers that signify perfect love and are cherished for their simple beauty.' }
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
