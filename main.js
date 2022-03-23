window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});

/*//for js part 
1. we need to first get tthe element by use of id ,,,
    
  let addtobutton = document.getelementbyid("addto btn")
let todocontainer = document.getelementbyid("todocontainer")
let inputfield= document.getelementbyid("inputfield")

2. then we have to to event handling/listener

addtobutton.addeventlistener('click',function(){  //click garda k garni//
var paragraph = document.createelement('p') // chuttai paragraph load garaune tala

     
3. we need to append todocontainer

toDocontainer.appendchild(paragraph)

4. we need to display value of text
paragraph.innertext=inputfield.value;
})


//if we need to style the paragraph in js without doing it in css ..
 paragraph.classlist.add(' j style garna man laagxa tessko css head eg:  h1 header  main ');


 //if we want to empty the input field then
 inputfield.value="";

 //if we want to remove the todo by clicking the paragraph
 we can use event listener for paragraph





//for styling todo ///todo lai cross style gardinxa
 paragraph.addeventlistener('click',function(){
     paragraph.style.textdecoration = "line through";
     
 })


 //for deleting todo after clicking
 paragraph.addeventlistener('dblclick',function(){
    todocontainer.removechild(paragraph)
    
 })

 dblckick=double click
 appenchild=add paragraph/todo
 removechild= deletes todo
 innertext= add value


 source:https://www.youtube.com/watch?v=-pRg_daFjfk&t=24s

*/
