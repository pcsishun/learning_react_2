document.addEventListener("DOMContentLoaded", function(){

    document.querySelector('form').onsubmit = function(){
        // console.log("click")
        const tasks = document.querySelector('ul');
        const list = document.createElement('li');
        const todo = document.createElement('span');

        todo.innerHTML = document.querySelector('#new-task').value;
        
        const deleteButton =  document.createElement('Button');
        deleteButton.innerHTML = 'x';
        deleteButton.onclick = function(){
            tasks.removeChild(list)
        }

        list.append(todo);
        list.append(deleteButton);
        tasks.append(list);

        document.querySelector("#new-task").value = "";

        return false; // อันนี้จะใส่หรือไม่ก็ได้ ถ้าใส่มันจะไม่ redict ปกติจะไม่ใส่กัน
    }

})