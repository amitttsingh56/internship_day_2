const addBtn = document.getElementById("add-task");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  input.value = "";

  // Toggle completed
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Remove task
  removeBtn.addEventListener("click", () => {
    li.remove();
  });
});
