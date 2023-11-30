// Array para almacenar datos de hoteles (simulación de base de datos)
let hotels = [];

const hotelForm = document.getElementById('hotel-form');
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
const addButton = document.getElementById('add-button');
const hotelList = document.getElementById('hotel-list');

// Agregar un hotel
addButton.addEventListener('click', () => {
    const name = nameInput.value;
    const description = descriptionInput.value;

    if (name && description) {
        const hotel = { name, description };
        hotels.push(hotel);
        displayHotels();
        resetForm();
    }
});

// Mostrar la lista de hoteles
function displayHotels() {
    hotelList.innerHTML = '';
    hotels.forEach((hotel, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${hotel.name}</strong>: ${hotel.description} <button onclick="editHotel(${index})">Editar</button> <button onclick="deleteHotel(${index})">Eliminar</button>`;
        hotelList.appendChild(li);
    });
}

// Editar un hotel
function editHotel(index) {
    const hotel = hotels[index];
    nameInput.value = hotel.name;
    descriptionInput.value = hotel.description;
    addButton.innerHTML = 'Actualizar';
    addButton.removeEventListener('click', addHotel);
    addButton.addEventListener('click', () => {
        hotels[index] = { name: nameInput.value, description: descriptionInput.value };
        displayHotels();
        resetForm();
    });
}

// Eliminar un hotel
function deleteHotel(index) {
    hotels.splice(index, 1);
    displayHotels();
}

// Limpiar el formulario
function resetForm() {
    nameInput.value = '';
    descriptionInput.value = '';
    addButton.innerHTML = 'Agregar';
    addButton.removeEventListener('click', editHotel);
    addButton.addEventListener('click', addHotel);
}

displayHotels();