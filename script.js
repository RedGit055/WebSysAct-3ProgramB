// =========================
// A. UPPERCASE INPUT
// =========================

document.getElementById("firstName").onblur = function() {
    this.value = this.value.toUpperCase();
};

document.getElementById("lastName").onblur = function() {
    this.value = this.value.toUpperCase();
};

document.getElementById("section").onblur = function() {
    this.value = this.value.toUpperCase();
};


// =========================
// B. INSERT ROW
// =========================

function insertRow() {

    var table = document.getElementById("sampleTable");

    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "New Row Cell 1";
    cell2.innerHTML = "New Row Cell 2";
}


// =========================
// C. REMOVE DROPDOWN ITEM
// =========================

function removeItem() {

    var dropdown = document.getElementById("myDropdown");

    dropdown.remove(dropdown.selectedIndex);
}


// =========================
// D. ZOOM IMAGE
// =========================

function zoomImage(image) {

    image.classList.toggle("zoomed");
}


// =========================
// E. RANDOM BACKGROUND
// =========================

function changeBackground() {

    var colors = [
        "#eeeeee",
        "#d9eaf7",
        "#dff0d8",
        "#fff3cd",
        "#f8d7da",
        "#e2d9f3"
    ];

    var randomIndex = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomIndex];
}