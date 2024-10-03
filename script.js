const categories = {
    "Deporte": [
        { front: "Soccer", back: "Fútbol" },
        { front: "Basketball", back: "Baloncesto" },
        { front: "Tennis", back: "Tenis" },
        { front: "Swimming", back: "Natación" },
        { front: "Running", back: "Correr" }
    ],
    "Escuela": [
        { front: "Pencil", back: "Lápiz" },
        { front: "Book", back: "Libro" },
        { front: "Notebook", back: "Cuaderno" },
        { front: "Teacher", back: "Profesor" },
        { front: "Student", back: "Estudiante" }
    ],
    "Trabajo": [
        { front: "Office", back: "Oficina" },
        { front: "Meeting", back: "Reunión" },
        { front: "Computer", back: "Computadora" },
        { front: "Colleague", back: "Colega" },
        { front: "Deadline", back: "Fecha límite" }
    ],
    "Comida": [
        { front: "Apple", back: "Manzana" },
        { front: "Bread", back: "Pan" },
        { front: "Cheese", back: "Queso" },
        { front: "Water", back: "Agua" },
        { front: "Chicken", back: "Pollo" }
    ],
    "Viajes": [
        { front: "Passport", back: "Pasaporte" },
        { front: "Suitcase", back: "Maleta" },
        { front: "Airport", back: "Aeropuerto" },
        { front: "Hotel", back: "Hotel" },
        { front: "Beach", back: "Playa" }
    ]
};

let currentCategory = null;
let currentCardIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const categoryGrid = document.getElementById('category-grid');
    const flashcardsSection = document.getElementById('flashcards-section');
    const categoriesSection = document.getElementById('categories');
    const categoryNav = document.getElementById('category-nav');
    const backToCategoriesButton = document.getElementById('back-to-categories');
    const flashcard = document.querySelector('.flashcard');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    // Crear botones de categoría
    for (let category in categories) {
        const categoryButton = document.createElement('button');
        categoryButton.textContent = category;
        categoryButton.classList.add('category-card');
        categoryButton.addEventListener('click', () => loadCategory(category));
        categoryGrid.appendChild(categoryButton);
    }

    function loadCategory(category) {
        currentCategory = category;
        currentCardIndex = 0;
        categoriesSection.style.display = 'none';
        flashcardsSection.style.display = 'block';
        categoryNav.style.display = 'block';
        updateCard();
    }

    backToCategoriesButton.addEventListener('click', () => {
        flashcardsSection.style.display = 'none';
        categoriesSection.style.display = 'block';
        categoryNav.style.display = 'none';
    });

    if (flashcard) {
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
        });
    }

    function updateCard() {
        const frontContent = document.querySelector('.flashcard-front p');
        const backContent = document.querySelector('.flashcard-back p');
        
        frontContent.textContent = categories[currentCategory][currentCardIndex].front;
        backContent.textContent = categories[currentCategory][currentCardIndex].back;
    }

    function nextCard() {
        currentCardIndex = (currentCardIndex + 1) % categories[currentCategory].length;
        flashcard.classList.remove('flipped');
        updateCard();
    }

    function prevCard() {
        currentCardIndex = (currentCardIndex - 1 + categories[currentCategory].length) % categories[currentCategory].length;
        flashcard.classList.remove('flipped');
        updateCard();
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', prevCard);
        nextButton.addEventListener('click', nextCard);
    }
});