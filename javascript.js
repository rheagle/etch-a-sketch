

const container = document.getElementById('container');
//const initialDivs = 16 * 16;

function createGrid(size) {
    // remove existing divs
    container.innerHTML = "";

    // calculate size of each div based on grid size
    const divSize = 640 / size;

    // create divs and append to container
    for (let i = 0; i < size * size; i++) {
       // Create a new div element
        const newDiv = document.createElement('div');

        newDiv.addEventListener('mouseover', function() {
            newDiv.style.backgroundColor = '#D3A6FF';
        });

        // set size of each div based on new size
        newDiv.style.width = `${divSize}px`;
        newDiv.style.height = `${divSize}px`;

        // Append div to container
        container.appendChild(newDiv);
    }
}

// initial 16x16 grid
createGrid(16);

// button to change grid size
const btnContainer = document.getElementById("btn-container");
const button = document.createElement("button");
button.textContent = "Change grid size";
btnContainer.appendChild(button);

button.addEventListener('click', () => {
    const newSize = parseInt(prompt("Enter desired grid size."), 10);

    // validate input
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        // create new grid with specified size
        createGrid(newSize);
    }
})

