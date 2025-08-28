const projects = [
    {
        title: 'About Me', 
        thumbnail: 'images/SL.png', 
        projectUrl: 'welcome.html'
    },
    {
        title: 'React Three GeoJSON Globe',
        thumbnail: 'images/three-geojson.jpeg', 
        projectUrl: 'https://voice-less.github.io/react-three-geojson-globe/'
    },
    {
        title: 'Game of Life++',
        thumbnail: 'images/game_of_life.jpeg', 
        projectUrl: 'https://voice-less.github.io/game-of-life-plus-plus/'
    },
    {
        title: 'Pathfinding Visualizer++',
        thumbnail: 'images/pathfinding.jpeg', 
        projectUrl: 'https://voice-less.github.io/pathfinding-visualizer/'
    },
    {
        title: 'Verlet Physics Engine',
        thumbnail: 'images/verlet-engine.jpeg', 
        projectUrl: 'https://voice-less.github.io/2d-verlet-physics-engine/'
    },
];

const projectListContainer = document.getElementById('project-list');
let currentSelectedCard = null;

// This function creates the HTML for a single project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <a href="${project.projectUrl}" target="viewer-frame">
            <div class="cover">
                <img src="${project.thumbnail}" loading="lazy" onerror="this.style.display='none'">
            </div>
            <div class="title">${project.title}</div>
        </a>
    `;
    
    // Add a click listener to handle highlighting
    card.addEventListener('click', () => {
        if (currentSelectedCard) {
            currentSelectedCard.classList.remove('selected');
        }
        card.classList.add('selected');
        currentSelectedCard = card;
    });

    return card;
}

// Main function to build the project list in the sidebar
function populateProjectList() {
    projects.forEach(project => {
        const cardElement = createProjectCard(project);
        projectListContainer.appendChild(cardElement);
    });

    const firstCard = projectListContainer.querySelector('.card');
    if (firstCard) {
        firstCard.classList.add('selected');
        currentSelectedCard = firstCard;
    }
}

populateProjectList();
