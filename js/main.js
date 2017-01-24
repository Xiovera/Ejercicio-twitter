
	//variable global:
	var listTask = document.getElementById("listTask");
	
	function createList(container,task)
	{
		var div=document.createElement('div');
		div.className="list , checkbox , well";
		var icon=document.createElement('i');
		icon.className=" fa fa-trash-o , icon , pull-right";
		var label=document.createElement('label');
		var checkbox=document.createElement('input');
		checkbox.type="checkbox";
		div.appendChild(label);
		label.appendChild(checkbox);
		label.appendChild(document.createTextNode(task));
		div.appendChild(icon);
		container.appendChild(div);
		icon.addEventListener('click', deleteTask);
		checkbox.addEventListener("click",check);

	}

	function addTask()
	{
		var task = document.getElementById("task");
		if(task.value.length == 0){
			alert("Debe ingresar una tarea");
		}else{
			createList(listTask,task.value);
		}

		task.focus();
		task.value="";
	}

	function deleteTask(evt)
	{
			listTask.removeChild(evt.target.parentNode);
	}

	function check(evt)
	{
		var check=evt.target.parentNode;
		if(evt.target.checked)
			check.setAttribute("style","text-decoration:line-through");
		else
			check.setAttribute("style","text-decoration:none");
	}