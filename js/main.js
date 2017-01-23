
	//variable global:
	var listTask = document.getElementById("listTask");
	
	function createList(container,task)
	{
		var div=document.createElement('div');
		div.className="list , checkbox";
		var icon=document.createElement('i')
		icon.className="glyphicon , glyphicon-trash, icon";
		var label=document.createElement('label');
		label.className="well, text-justify"
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
		if(task.value= "")
			task.innerText = "Debe ingresar su apellido";
		else
			createList(listTask,task.value);

		task.focus();
		task.value="";
	}

	function deleteTask(evt)
	{
		evt.target.parentNode.classname="list , checkbox";
		setTimeout(function (){
			listTask.removeChild(evt.target.parentNode);
		},2000);
	}

	function check(evt)
	{
		var check=evt.target.parentNode;
		if(evt.target.checked)
			check.setAttribute("style","text-decoration:line-through");
		else
			check.setAttribute("style","text-decoration:none");
	}