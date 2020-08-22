const addTask = document.querySelectorAll(".addTask");
addTask.addEventListener('click', cloneField);

function cloneField() {
    const newFieldContainer = document.querySelector(".schedule-content").cloneNode(true);
    const fields = newFieldContainer.querySelectorAll("p");
    fields.forEach(function (field) {
        field.value = ""
    })
    document.querySelector(".schedule-item").appendChild(newFieldContainer);
}