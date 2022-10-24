
const apiUrl = "https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks"

const checkElm = document.getElementById("checkbox-undone");
let checkCondition = false

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

const getData = () => {

    const renderTasks = (data) => {

        const tasksElm = document.querySelector(".todo__tasks");
        tasksElm.innerHTML = data.map((item) => {
                if (checkCondition) {
                    if (!item.done) {
                        return Task(item);
                    }
                }
                else {
                    return Task(item);
                }
        }).join('');
    }

    fetch(apiUrl).then((response) => response.json()).then(renderTasks);

}

getData()


checkElm.addEventListener('change', function() {
    if (this.checked) {
      checkCondition = true
      getData()
    } else {
      checkCondition = false
      getData()
    }
  });