const tasks = [{
    id: 1,
    name: "Reading",
    done: false,
},
{
    id: 2,
    name: "Playing",
    done: true,
},
{
    id: 3,
    name: "Drawing",
    done: false,
}
];

function loadTask(){
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    tasks.forEach((task,index) => {
        tbody.innerHTML += `</tr>
        <td>${index + 1}</td> 
        <td>${task .name}</td> 
        <td>${task.done ? "Completed" : "Pending"}</td> 
        <td></td> 
        </tr>`;
    });
}

loadTask();