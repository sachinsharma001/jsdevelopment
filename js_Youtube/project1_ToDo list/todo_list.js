 console.log(JSON.parse(localStorage.getItem('todolist')))
 const toDoList=JSON.parse(localStorage.getItem('todolist')) || [{
  task: 'make dinner',
  date: '2022-12-22'
}, {
  task: 'wash dishes',
  date: '2022-12-22'
}]; 
 renderTask();
 function renderTask(){
    let toDoHtml='';
    for (let i=0;i<toDoList.length;i++){
        const toDoObject=toDoList[i]
        const task = toDoObject.task;
        const date = toDoObject.date;
        const Html=`
        <div>${task}</div>
        <div>${date}</div>
        <button onclick="toDoList.splice(${i},1);
        renderTask();
        savetolocal();"  
        class="delete-todo-button"
        >Delete</button>`;
        toDoHtml+=Html;
    }
    document.querySelector('.js-todo-list').innerHTML=toDoHtml
 }
 function addingtodo(){
    const inputTask=document.querySelector('.task_list');
     const task=inputTask.value;
     const date=document.querySelector('.task_date').value;
     toDoList.push({task,date});
     inputTask.value='';
     renderTask();
     savetolocal();
}
function savetolocal(){
    localStorage.setItem('todolist',JSON.stringify(toDoList))
}