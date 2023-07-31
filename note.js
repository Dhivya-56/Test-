document.addEventListener('DOMContentLoaded', function () {
  const noteTitleInput = document.getElementById('noteTitle');

  const noteContentInput = document.getElementById('noteContent');

  const saveNoteBtn = document.getElementById('saveNoteBtn');

  const notesList = document.getElementById('notesList');

  let notes=[]
  notes = JSON.parse(localStorage.getItem('notes')) || [];
  
  console.log(notes)
  function saveNotesToLocalStorage() {
    
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  function addNoteToList(title, content) {
    const noteElement = document.createElement('div');

    noteElement.classList.add('note');
   
    noteElement.textContent = title;

    noteElement.addEventListener('click', function () {
      showNoteDetails(title, content, noteElement);
    });

    notesList.appendChild(noteElement);
    notes.push({ title, content });
    saveNotesToLocalStorage();
  }

  function showNoteDetails(title, content, noteElement) {
    const noteDetailsElement = document.createElement('div');
    noteDetailsElement.style.backgroundColor = "#94dce3"; 
    noteDetailsElement.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
      `;

    noteElement.replaceWith(noteDetailsElement);

    const editBtn = noteDetailsElement.querySelector('.editBtn');
    const deleteBtn = noteDetailsElement.querySelector('.deleteBtn');

    editBtn.addEventListener('click', function () {
      editNote(title, content, noteDetailsElement);
    });

    deleteBtn.addEventListener('click', function () {
      deleteNote(title, noteDetailsElement);
    });
  }

  function editNote(title, content, noteDetailsElement) {
    noteTitleInput.value = title;
    noteContentInput.value = content;
    notesList.removeChild(noteDetailsElement);
  }

  function deleteNote(title, noteDetailsElement) {
    notes = notes.filter(note => note.title !== title);
    notesList.removeChild(noteDetailsElement);
    saveNotesToLocalStorage();
  }

  saveNoteBtn.addEventListener('click', function () {
        const title = noteTitleInput.value.trim();
    const content = noteContentInput.value.trim();

    if (title === '' || content === '') {
      alert('Please enter both title and content.');
      return;
    }

    addNoteToList(title, content);
    noteTitleInput.value = '';
    noteContentInput.value = '';
  });
  function confirmLeave(event) {
    // event.preventDefault(); // Cancel the unload event
    event.returnValue = ''; // Chrome requires this to work
}

// Attach the event listener to the 'beforeunload' event
window.addEventListener('beforeunload', confirmLeave);
  // Load the existing notes when the page loads
  // notes.forEach(note => addNoteToList(note.title,note.content));
});
