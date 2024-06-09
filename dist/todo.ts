// Function to add a new task
function addTask(task: string) {
    const todoList = document.getElementById("todo-list");
    const li = document.createElement("li");
    li.className = "border-b border-gray-200 flex items-center justify-between py-4";
    li.innerHTML = `
        <label class="flex items-center">
            <input type="checkbox" class="mr-2">
            <span>${task}</span>
        </label>
        <div>
            <button class="text-red-500 hover:text-red-700 mr-2 delete-btn">Delete</button>
            <button class="text-blue-500 hover:text-blue-700 edit-btn">Edit</button>
        </div>
    `;
    todoList.appendChild(li);

    //
