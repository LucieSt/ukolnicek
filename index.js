console.log('funguju!');

const apiUrl = "https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks"

const Task = (props) => {
    const { id, name, due, done } = props;
    console.log("hello")

}

const getApiData = () => {

    const displayData = (data) => {
        console.log(data);
        data.map((item) => {
            console.log(item);
            return Task(item);
        })
    }

    fetch(apiUrl).then((response) => response.json()).then(displayData);

}

getApiData();