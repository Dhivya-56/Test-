// Get elements
const noteTitleInput = document.getElementById('noteTitle');
const noteContentInput = document.getElementById('noteContent');
console.log(noteContentInput,"this is")
const saveNoteButton = document.getElementById('saveNote');
const noteList = document.getElementById('noteList');
const newbtn2=document.createElement('button');
let note=[]
let notearr={
    inputBoxValues:[]
}
saveNoteButton.addEventListener("click", (e) => {
e.preventDefault();
  const noteText = noteTitleInput.value;
  const notecont=noteContentInput.value;
//   const newDiv=document.createElement('div')
  const newNote=document.createElement('li');
  console.log(newNote)
  newNote.innerText=noteText;
 
noteList.appendChild(newNote)

const newbtn1=document.createElement('button');
newbtn1.setAttribute("id","editbtn")
// console.log(newbtn1.id,"this is priya")
newbtn1.innerText="edit";
noteList.appendChild(newbtn1)

const newbtn2=document.createElement('button');
newbtn2.setAttribute("id","deletebtn")
newbtn2.innerText="Delete";
newbtn2.classList.add("delete");
noteList.appendChild(newbtn2)

for(let i=0;i<noteText.length ;i++){
    // notearr.inputBoxValues.title.push(noteText[i])
    notearr.inputBoxValues.title=noteText;
    notearr.inputBoxValues.content=notecont;
}
for(let j=0;j<notecont.length ;j++){
    // notearr.inputBoxValues.title.push(noteText[i])
    notearr.inputBoxValues.title=noteText;
    notearr.inputBoxValues.content=notecont;
}


note.push(notearr);
    console.log(note);
    console.log(noteText.length);
    resetForm()
})
function resetForm(){
    document.getElementById("noteTitle").value = "";
        document.getElementById("noteContent").value = "";
}

function editNote(note){
    document.getElementById("noteTitle").value=notearr.title;
    document.getElementById("noteContent").value=notearr.content;
    document.getElementById("").innerText="update";
    document.getElementById("add_notes").onclick=()=>UpdateNote(notearr);

}
function deleteNote(note){
    const confirmation=confirm("Are you sure you want to delete the notes?")
    if(confirmation){
        note=note.filter((value)=>value.title!==notearr.title)
        display_notes()
        clear_notes()
    }
}
