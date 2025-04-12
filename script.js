const root_chl = document.querySelector("#root-chl");
const reset = document.querySelector("#reset");
const ch_grid = document.querySelector("#grid");
root_chl.style.cssText = "background:red;";

let rows = 16;
let cols = 16;

// Clear the entire grid
function clearGrid() {
    root_chl.innerHTML = ""; // Removes all child elements
}

// Generate grid based on current rows & cols
function createGrid() {
    clearGrid(); // Clear before rebuilding
    for (let i = 1; i <= rows; i++) {
        let box_row = document.createElement("div");
        box_row.classList.add("box_row");
        root_chl.appendChild(box_row);

        for (let o = 1; o <= cols; o++) {
            let box_col = document.createElement("div");
            box_col.classList.add("box_col");
            box_row.appendChild(box_col);
        }
    }
}

// Prompt user for new grid size
function row_col_input() {
    const newRows = parseInt(prompt("Enter number of rows:", rows));
    const newCols = parseInt(prompt("Enter number of columns:", cols));

    if (newRows > 100 || newCols > 100) {
        alert("Maximum grid size is 100x100!");
        return;
    }
    else {
        // Only update if valid numbers are entered
        if (!isNaN(newRows) && !isNaN(newCols)) {
            rows = newRows;
            cols = newCols;
            createGrid(); // Rebuild the grid
        } else {
            alert("Please enter valid numbers!");
        }
    }
}

// Event Listeners
ch_grid.addEventListener("click", row_col_input);

root_chl.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("box_col")) {
        e.target.style.cssText = "background:gray;";
    }
});

reset.addEventListener("click", () => {
    const allBoxes = document.querySelectorAll(".box_col");
    allBoxes.forEach(box => {
        box.style.cssText = "background:white;";
    });
});

// Initialize the default grid
createGrid();