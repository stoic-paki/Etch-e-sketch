const root_chl = document.querySelector("#root-chl")
root_chl.style.cssText="background:red;"
let box_col;

for(let i=1; i<=16; i++){
    // this creates the rows of the grid
    let box_row = document.createElement("div")
    box_row.classList.add("box_row")
    // box_row.textContent=i    
    root_chl.appendChild(box_row)

    // this creates the columns of each row which are 16
    for(let o=1; o<=16; o++){
        box_col = document.createElement("div")
        box_col.classList.add("box_col")
        // box_col.textContent=o
        box_row.appendChild(box_col)
    }
}

root_chl.addEventListener("mouseover", (e)=>{
    if(e.target.classList.contains("box_col")) {
        console.log("hello world")
        console.log(e)
        e.target.style.cssText="background:blue;"
    }
})