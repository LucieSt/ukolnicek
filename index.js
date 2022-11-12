const apiUrl = "https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks"

const checkElm = document.getElementById("checkbox-undone");

const Task = (props) => {
    const { id, name, due, done } = props;

    let doneSign = ""
    if (done) {
        doneSign = "✓";
    }

    return `
    <div class="task" id="${id}">
        <div class="task__body">
            <div class="task__name">${name}</div>
            <div class="task__due">${due}</div>
        </div>
        <div class="task__done">${doneSign}</div>
    </div>
    `;
}

const renderTasks = (data) => {
    const tasksElm = document.querySelector(".todo__tasks");
    tasksElm.innerHTML = data.map((item) => Task(item)).join('');
}

fetch(apiUrl).then((response) => response.json()).then(renderTasks);

checkElm.addEventListener('change', function() {
    if (this.checked) {
      fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false").then((response) => response.json()).then(renderTasks);
    } else {
      fetch(apiUrl).then((response) => response.json()).then(renderTasks);
    }
});