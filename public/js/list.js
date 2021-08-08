const List = require('list.js');

function editListEl() {
	const listElements = document.getElementsByClassName('list-el');
	const listEditBtns = document.getElementsByClassName('list-edit-btn')

	for (let i=0; i <listEditBtns.length; i++) {
		listEditBtns[i].addEventListener('click', (e) => {
			const parent = listEditBtns[i].parentElement;

			listEditBtns[i].style.display = "none";
			
			const listElSubmit = document.createElement('button');
			listElSubmit.innerHTML = "submit";

			parent.appendChild(listElSubmit);

			const listEl = document.getElementById(`list-el-${e.target.getAttribute('id')}`);
			const inputEl = document.createElement('input');
			
			inputEl.setAttribute('type', 'text');
			inputEl.setAttribute('placeholder', `${listEl.innerHTML}`);
			
			listEl.innerHTML = "";
			listEl.appendChild(inputEl);

			listElSubmit.addEventListener('click', (e) => {
				listEl.innerHTML = inputEl.value;
							
				inputEl.remove();
				listElSubmit.remove();
				listEditBtns[i].style.display = "inline-block";

			});
		});
	}
}


function editListEl2() {
	let options = {		
		valueNames: ['id', 'content']
	};

	let detailList = new List('detail-list', options); //Create List object as defined in list.js. Finds the child list element

	const listEditBtns = document.getElementsByClassName('list-edit-btn'); //Grab all the edit buttons

	for (let i=0; i < listEditBtns.length; i++) { //create event listeners for all edit buttons
		listEditBtns[i].addEventListener('click', (e) => {
			const parent = listEditBtns[i].parentElement;

			//Hide edit button and then display a submit button for changing the list element content
			listEditBtns[i].style.display = "none"; 
			const listElSubmit = document.createElement('button');
			listElSubmit.innerHTML = "submit";
			parent.appendChild(listElSubmit);

			//Use list.js to get the list item
			const id = Number(e.target.getAttribute('id'));
			const listItem = detailList.get('id', id)[0];
			
			//Replace the list item with an input field for the user to specify their change
			const inputElText = `<input type=text placeholder=${listItem.values().content} id="input-id-${id}"/>`
			listItem.values({
				id,
				content: inputElText
			});
			const inputEl = document.getElementById(`input-id-${id}`); //Grab the newly created input element

			//Listen for the user submit
			listElSubmit.addEventListener('click', (e) => {
				listItem.values({
					id,
					content: inputEl.value
				});
				
				listElSubmit.remove();
				listEditBtns[i].style.display = "inline-block";
			});
		});
	}
}


editListEl2();

// editListEl();