// import React, { useEffect, useState } from 'react'
// import './App.css';


// import NoteContainer from './Components/NoteContainer/NoteContainer';
// import Sidebar from './Components/Sidebar/Sidebar';

// function App() {

//  const [notes, setNotes]=useState(JSON.parse(localStorage.getItem('notes-app')) || []);
 

// const addNote=(color)=>{
//   const tempNotes=[...notes];
//   tempNotes.push({
//     id:Date.now() +"" +Math.floor(Math.random()*78),
//     text:"",
//     time: Date.now(),
//     color,
//   });
//   setNotes(tempNotes);
// };


// const updateText=(text,id)=>{
//   const tempNotes=[...notes];
//   const index = tempNotes.findIndex((item)=> item.id === id);
//   if(index < 0) return;
//   tempNotes[index].text = text;
//   setNotes(tempNotes)
// };

// useEffect(()=>{
//   localStorage.setItem('notes-app',JSON.stringify(notes))
// },[notes])



// const [groups, setGroups] = useState([]);

//   const addGroup = (name, color) => {
//     const newGroup = {
//       id: Math.random().toString(36).substr(2, 9), // Generating a unique ID for the group
//       name: name,
//       color: color
//     };
//     setGroups([...groups, newGroup]);
//     // Here you can also save the updated groups to localStorage if needed
//   };


//   return (
//     <div className="App">
//       {/* <Sidebar addNote={addNote}/> */}
//       <Sidebar addGroup={addGroup} />
//     <NoteContainer notes={notes}
//     updateText={updateText}/>
//     </div>


//   );
// }

// export default App;


















// App.js

// import React, { useEffect, useState } from 'react';
// import './App.css';

// import NoteContainer from './Components/NoteContainer/NoteContainer';
// import Sidebar from './Components/Sidebar/Sidebar';

// function App() {
//   const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || []);
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(null);

//   // Function to filter notes based on the selected group
//   const filterNotesByGroup = (groupId) => {
//     setSelectedGroup(groupId);
//   };

//   // Function to handle adding a new note
//   const addNote = (text) => {
//     if (!selectedGroup) {
//       alert('Please select a group before adding a note.');
//       return;
//     }
//     const newNote = {
//       id: Date.now().toString(),
//       text: text,
//       groupId: selectedGroup
//     };
//     setNotes([...notes, newNote]);
//   };

//   useEffect(() => {
//     localStorage.setItem('notes-app', JSON.stringify(notes));
//   }, [notes]);

//   const addGroup = (group) => {
//     setGroups([...groups, group]);
//   };

//   return (
//     <div className="App">
//       <Sidebar addGroup={addGroup} filterNotesByGroup={filterNotesByGroup} groups={groups} />
//       <div className="main-content">
//         {selectedGroup && (
//           <div className="notes-tab">
//             <input
//               type="text"
//               placeholder="Add a new note..."
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   addNote(e.target.value);
//                   e.target.value = ''; // Clear input after adding note
//                 }
//               }}
//             />
//           </div>
//         )}
//         <NoteContainer notes={notes.filter(note => note.groupId === selectedGroup)} />
//       </div>
//     </div>
//   );
// }

// export default App;






































// App.js   isme unnamed group bolke ara lekin exact color ke sath wala nhi ara

// import React, { useEffect, useState } from 'react';
// import './App.css';

// import NoteContainer from './Components/NoteContainer/NoteContainer';
// import Sidebar from './Components/Sidebar/Sidebar';

// function App() {
//   const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || []);
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [newNoteText, setNewNoteText] = useState('');

//   // Function to handle adding a new note
//   const addNote = () => {
//     if (!selectedGroup) {
//       alert('Please select a group before adding a note.');
//       return;
//     }
//     if (!newNoteText.trim()) {
//       alert('Note text cannot be empty.');
//       return;
//     }
//     const newNote = {
//       id: Date.now().toString(),
//       text: newNoteText,
//       groupId: selectedGroup.id
//     };
//     setNotes([...notes, newNote]);
//     setNewNoteText('');
//   };

//   useEffect(() => {
//     localStorage.setItem('notes-app', JSON.stringify(notes));
//   }, [notes]);

//   const addGroup = (name, color) => {
//     const newGroup = {
//       id: Math.random().toString(36).substr(2, 9),
//       name: name,
//       color: color
//     };
//     setGroups([...groups, newGroup]);
//     // Here you can also save the updated groups to localStorage if needed
//   };

//   const selectGroup = (group) => {
//     setSelectedGroup(group);
//   };

//   return (
//     <div className="App">
//       <Sidebar addGroup={addGroup} groups={groups} selectGroup={selectGroup} />
//       <div className="main-content">
//         {selectedGroup && (
//           <div className="notes-tab">
//             <input
//               type="text"
//               placeholder="Add a new note..."
//               value={newNoteText}
//               onChange={(e) => setNewNoteText(e.target.value)}
//             />
//             <button onClick={addNote}>Add Note</button>
//           </div>
//         )}
//         <NoteContainer notes={notes.filter((note) => note.groupId === (selectedGroup ? selectedGroup.id : null))} />
//       </div>
//     </div>
//   );
// }

// export default App;












































// App.js












// App.js

// import React, { useEffect, useState } from 'react';
// import './App.css';

// import NoteContainer from './Components/NoteContainer/NoteContainer';
// import Sidebar from './Components/Sidebar/Sidebar';

// function App() {
//   const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || []);
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [newNoteText, setNewNoteText] = useState('');

//   const addNote = () => {
//     if (!selectedGroup) {
//       alert('Please select a group before adding a note.');
//       return;
//     }
//     if (!newNoteText.trim()) {
//       alert('Note text cannot be empty.');
//       return;
//     }
//     const newNote = {
//       id: Date.now().toString(),
//       text: newNoteText,
//       time: new Date().getTime(), // Adding current timestamp
//       groupId: selectedGroup.id
//     };
//     setNotes([newNote, ...notes]); // Add new note at the beginning
//     setNewNoteText('');
//   };
  



//   const saveNote = (noteId) => {
//     const updatedNotes = notes.map(note => {
//       if (note.id === noteId) {
//         return {
//           ...note,
//           groupId: selectedGroup.id
//         };
//       }
//       return note;
//     });
//     setNotes(updatedNotes);
//   };

//   useEffect(() => {
//     localStorage.setItem('notes-app', JSON.stringify(notes));
//   }, [notes]);

//   const addGroup = (group) => {
//     setGroups([...groups, group]);
//   };

//   const selectGroup = (group) => {
//     setSelectedGroup(group);
//   };

//   return (
//     <div className="App">
//       <Sidebar addGroup={addGroup} groups={groups} selectGroup={selectGroup} />
//       <div className="main-content">
//         {selectedGroup && (
//           <div className="notes-tab">
//             <input
//               type="text"
//               placeholder="Add a new note..."
//               value={newNoteText}
//               onChange={(e) => setNewNoteText(e.target.value)}
//             />
//             <button onClick={addNote}>Add Note</button>
//           </div>
//         )}
//         <NoteContainer notes={notes.filter((note) => note.groupId === (selectedGroup ? selectedGroup.id : null))} saveNote={saveNote} />


//       </div>
//     </div>
// );
// }

// export default App;























// App
// import React, { useEffect, useState } from 'react';
// import './App.css';

// import NoteContainer from './Components/NoteContainer/NoteContainer';
// import Sidebar from './Components/Sidebar/Sidebar';

// function App() {
//   // Initialize notes state with an empty object
//   const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || {});
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [newNoteText, setNewNoteText] = useState('');
//   const [showNewNoteBox, setShowNewNoteBox] = useState(false);
//   const [newNoteTextBoxValue, setNewNoteTextBoxValue] = useState('');

//   const addNote = () => {
//     if (!selectedGroup) {
//       alert('Please select a group before adding a note.');
//       return;
//     }
//     if (!newNoteTextBoxValue.trim()) {
//       alert('Note text cannot be empty.');
//       return;
//     }
//     const groupId = selectedGroup.id;
//     const newNote = {
//       id: Date.now().toString(),
//       text: newNoteTextBoxValue,
//       time: new Date().getTime(),
//     };
//     // Update notes state to add the new note to the selected group
//     setNotes(prevNotes => ({
//       ...prevNotes,
//       [groupId]: [...(prevNotes[groupId] || []), newNote], // Add the new note to the existing notes for the group
//     }));
//     setNewNoteTextBoxValue('');
//   };

//   const saveNote = (noteId) => {
//     const groupId = selectedGroup.id;
//     // Update notes state to save the note
//     setNotes(prevNotes => ({
//       ...prevNotes,
//       [groupId]: prevNotes[groupId].map(note => {
//         if (note.id === noteId) {
//           return {
//             ...note,
//             groupId: selectedGroup.id
//           };
//         }
//         return note;
//       }),
//     }));
//   };

//   useEffect(() => {
//     localStorage.setItem('notes-app', JSON.stringify(notes));
//   }, [notes]);

//   const addGroup = (group) => {
//     setGroups([...groups, group]);
//     setShowNewNoteBox(true);
//     setSelectedGroup(group);
//   };

//   const selectGroup = (group) => {
//     setSelectedGroup(group);
//     setShowNewNoteBox(true);
//   };

//   const handleNewNoteButtonClick = () => {
//     addNote();
//     setShowNewNoteBox(false);
//   };

//   return (
//     <div className="App">
//       <Sidebar addGroup={addGroup} groups={groups} selectGroup={selectGroup} />
//       <div className="main-content">
//         <NoteContainer notes={selectedGroup ? notes[selectedGroup.id] || [] : []} saveNote={saveNote} />

//         {showNewNoteBox && (
//           <div className="new-note-container">
//             <textarea
//               className="new-note-text"
//               placeholder="Add a new note..."
//               value={newNoteTextBoxValue}
//               onChange={(e) => setNewNoteTextBoxValue(e.target.value)}
//             />
//             <button onClick={handleNewNoteButtonClick}>Add Note</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
























// import React, { useEffect, useState } from 'react';
// import './App.css';

// import NoteContainer from './Components/NoteContainer/NoteContainer';
// import Sidebar from './Components/Sidebar/Sidebar';

// function App() {
//   const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || {});
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [newNoteText, setNewNoteText] = useState('');
//   const [showNewNoteBox, setShowNewNoteBox] = useState(false);
//   const [newNoteTextBoxValue, setNewNoteTextBoxValue] = useState('');

//   const addNote = () => {
//     if (!selectedGroup) {
//       alert('Please select a group before adding a note.');
//       return;
//     }
//     if (!newNoteTextBoxValue.trim()) {
//       alert('Note text cannot be empty.');
//       return;
//     }
//     const groupId = selectedGroup.id;
//     const newNote = {
//       id: Date.now().toString(),
//       text: newNoteTextBoxValue,
//       time: new Date().getTime(),
//     };
//     setNotes(prevNotes => ({
//       ...prevNotes,
//       [groupId]: [...(prevNotes[groupId] || []), newNote],
//     }));
//     setNewNoteTextBoxValue('');
//   };

//   const saveNote = (noteId) => {
//     const groupId = selectedGroup.id;
//     setNotes(prevNotes => ({
//       ...prevNotes,
//       [groupId]: prevNotes[groupId].map(note => {
//         if (note.id === noteId) {
//           return {
//             ...note,
//             groupId: selectedGroup.id
//           };
//         }
//         return note;
//       }),
//     }));
//   };

//   useEffect(() => {
//     localStorage.setItem('notes-app', JSON.stringify(notes));
//   }, [notes]);

//   const addGroup = (group) => {
//     setGroups([...groups, group]);
//     setShowNewNoteBox(true);
//     setSelectedGroup(group);
//   };

//   const selectGroup = (group) => {
//     setSelectedGroup(group);
//     setShowNewNoteBox(true);
//   };

//   const handleNewNoteButtonClick = () => {
//     addNote();
//     setShowNewNoteBox(false);
//   };

//   return (
//     <div className="App">
//       <Sidebar addGroup={addGroup} groups={groups} selectGroup={selectGroup} />
//       <div className="main-content">
//         <NoteContainer notes={selectedGroup ? notes[selectedGroup.id] || [] : []} saveNote={saveNote} />

//         {showNewNoteBox && (
//           <div className="new-note-container">
//             <textarea
//               className="new-note-text"
//               placeholder="Add a new note..."
//               value={newNoteTextBoxValue}
//               onChange={(e) => setNewNoteTextBoxValue(e.target.value)}
//             />
//             <div
//               className={`save-arrow ${newNoteTextBoxValue.length > 0 ? "black" : "grey"}`}
//               onClick={handleNewNoteButtonClick}
//             >
//               ➡
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;




























// import React, { useEffect, useState } from 'react';
// import './App.css';

// import NoteContainer from './Components/NoteContainer/NoteContainer';
// import Sidebar from './Components/Sidebar/Sidebar';

// function App() {
//   const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || {});
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [newNoteText, setNewNoteText] = useState('');
//   const [showNewNoteBox, setShowNewNoteBox] = useState(false);
//   const [newNoteTextBoxValue, setNewNoteTextBoxValue] = useState('');

//   const addNote = () => {
//     if (!selectedGroup) {
//       alert('Please select a group before adding a note.');
//       return;
//     }
//     if (!newNoteTextBoxValue.trim()) {
//       alert('Note text cannot be empty.');
//       return;
//     }
//     const groupId = selectedGroup.id;
//     const newNote = {
//       id: Date.now().toString(),
//       text: newNoteTextBoxValue,
//       time: new Date().getTime(),
//     };
//     setNotes(prevNotes => ({
//       ...prevNotes,
//       [groupId]: [...(prevNotes[groupId] || []), newNote],
//     }));
//     setNewNoteTextBoxValue('');
//   };

//   const saveNote = (noteId) => {
//     const groupId = selectedGroup.id;
//     setNotes(prevNotes => ({
//       ...prevNotes,
//       [groupId]: prevNotes[groupId].map(note => {
//         if (note.id === noteId) {
//           return {
//             ...note,
//             groupId: selectedGroup.id
//           };
//         }
//         return note;
//       }),
//     }));
//   };

//   useEffect(() => {
//     localStorage.setItem('notes-app', JSON.stringify(notes));
//   }, [notes]);

//   const addGroup = (group) => {
//     setGroups([...groups, group]);
//     setShowNewNoteBox(true);
//     setSelectedGroup(group);
//   };

//   const selectGroup = (group) => {
//     setSelectedGroup(group);
//     setShowNewNoteBox(true);
//   };

//   const handleNewNoteButtonClick = () => {
//     addNote();
//     setShowNewNoteBox(false);
//   };

//   return (
//     <div className="App">
//       <Sidebar addGroup={addGroup} groups={groups} selectGroup={selectGroup} />
//       <div className="main-content">
//         <NoteContainer notes={selectedGroup ? notes[selectedGroup.id] || [] : []} saveNote={saveNote} />

//         {showNewNoteBox && (
//           <div className="new-note-container">
//             <div className="new-note-input-wrapper">
//               <textarea
//                 className="new-note-text"
//                 placeholder="Add a new note..."
//                 value={newNoteTextBoxValue}
//                 onChange={(e) => setNewNoteTextBoxValue(e.target.value)}
//               />
//               <div
//                 className={`save-arrow ${newNoteTextBoxValue.length > 0 ? "black" : "grey"}`}
//                 onClick={handleNewNoteButtonClick}
//               >
//                 ➡
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;







// import React, { useEffect, useState } from 'react';
// import './App.css';

// import NoteContainer from './Components/NoteContainer/NoteContainer';
// import Sidebar from './Components/Sidebar/Sidebar';

// function App() {
//   // Initialize notes and groups state with localStorage data or empty objects
//   const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || {});
//   const [groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups')) || []);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [newNoteText, setNewNoteText] = useState('');
//   const [showNewNoteBox, setShowNewNoteBox] = useState(false);
//   const [newNoteTextBoxValue, setNewNoteTextBoxValue] = useState('');

 

//   const addNote = () => {
//     if (!selectedGroup) {
//       alert('Please select a group before adding a note.');
//       return;
//     }
//     if (!newNoteTextBoxValue.trim()) {
//       alert('Note text cannot be empty.');
//       return;
//     }
//     const groupId = selectedGroup.id;
//     const newNote = {
//       id: Date.now().toString(),
//       text: newNoteTextBoxValue,
//       time: new Date().getTime(),
//     };
//     setNotes(prevNotes => ({
//       ...prevNotes,
//       [groupId]: [...(prevNotes[groupId] || []), newNote],
//     }));
//     setNewNoteTextBoxValue('');
//   };

//   const saveNote = (noteId) => {
//     const groupId = selectedGroup.id;
//     setNotes(prevNotes => ({
//       ...prevNotes,
//       [groupId]: prevNotes[groupId].map(note => {
//         if (note.id === noteId) {
//           return {
//             ...note,
//             groupId: selectedGroup.id
//           };
//         }
//         return note;
//       }),
//     }));
//   };

//   useEffect(() => {
//     localStorage.setItem('notes', JSON.stringify(notes));
//   }, [notes]);

//   useEffect(() => {
//     localStorage.setItem('groups', JSON.stringify(groups));
//   }, [groups]);

//   const addGroup = (group) => {
//     setGroups([...groups, group]);
//     setShowNewNoteBox(true);
//     setSelectedGroup(group);
//   };

//   const selectGroup = (group) => {
//     setSelectedGroup(group);
//     setShowNewNoteBox(true);
//   };

//   const handleNewNoteButtonClick = () => {
//     addNote();
//     setShowNewNoteBox(false);
//   };

//   return (
//     <div className="App">
//       <Sidebar addGroup={addGroup} groups={groups} selectGroup={selectGroup} />
//       <div className="main-content">
//         <NoteContainer notes={selectedGroup ? notes[selectedGroup.id] || [] : []} saveNote={saveNote} />

//         {showNewNoteBox && (
//           <div className="new-note-container">
//             <div className="new-note-input-wrapper">
//               <textarea
//                 className="new-note-text"
//                 placeholder="Add a new note..."
//                 value={newNoteTextBoxValue}
//                 onChange={(e) => setNewNoteTextBoxValue(e.target.value)}
//               />
//               <div
//                 className={`save-arrow ${newNoteTextBoxValue.length > 0 ? "black" : "grey"}`}
//                 onClick={handleNewNoteButtonClick}
//               >
//                 ➡
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// // above execute











// separate note separate group name



// import React, { useEffect, useState } from 'react';
// import './App.css';

// import NoteContainer from './Components/NoteContainer/NoteContainer';
// import Sidebar from './Components/Sidebar/Sidebar';

// function App() {
//   // Initialize notes and groups state with localStorage data or empty objects
//   const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || {});
//   const [groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups')) || []);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [newNoteText, setNewNoteText] = useState('');

//   const addNote = () => {
//     if (!selectedGroup) {
//       alert('Please select a group before adding a note.');
//       return;
//     }
//     if (!newNoteText.trim()) {
//       alert('Note text cannot be empty.');
//       return;
//     }
//     const groupId = selectedGroup.id;
//     const newNote = {
//       id: Date.now().toString(),
//       text: newNoteText,
//       time: new Date().getTime(),
//     };
//     setNotes(prevNotes => ({
//       ...prevNotes,
//       [groupId]: [...(prevNotes[groupId] || []), newNote],
//     }));
//     setNewNoteText('');
//   };

//   const saveNote = (noteId) => {
//     const groupId = selectedGroup.id;
//     setNotes(prevNotes => ({
//       ...prevNotes,
//       [groupId]: prevNotes[groupId].map(note => {
//         if (note.id === noteId) {
//           return {
//             ...note,
//             groupId: selectedGroup.id
//           };
//         }
//         return note;
//       }),
//     }));
//   };

//   useEffect(() => {
//     localStorage.setItem('notes', JSON.stringify(notes));
//   }, [notes]);

//   useEffect(() => {
//     localStorage.setItem('groups', JSON.stringify(groups));
//   }, [groups]);

//   const addGroup = (group) => {
//     setGroups([...groups, group]);
//     setSelectedGroup(group);
//   };

//   const selectGroup = (group) => {
//     setSelectedGroup(group);
//   };

//   return (
//     <div className="App">
//       <Sidebar addGroup={addGroup} groups={groups} selectGroup={selectGroup} />
//       <div className="main-content">
//         <NoteContainer notes={selectedGroup ? notes[selectedGroup.id] || [] : []} saveNote={saveNote} />
//         <div className="new-note-container">
//           <textarea
//             className="new-note-text"
//             placeholder="Add a new note..."
//             value={newNoteText}
//             onChange={(e) => setNewNoteText(e.target.value)}
//           />
//           <button onClick={addNote}>Add Note</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;













// For removing group names



// import React, { useEffect, useState } from 'react';
// import './App.css';

// import NoteContainer from './Components/NoteContainer/NoteContainer';
// import Sidebar from './Components/Sidebar/Sidebar';

// function App() {
//   // Initialize notes state with an empty object
//   const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes-app')) || {});
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [newNoteText, setNewNoteText] = useState('');
//   const [showNewNoteBox, setShowNewNoteBox] = useState(false);
//   const [newNoteTextBoxValue, setNewNoteTextBoxValue] = useState('');

//   const addNote = () => {
//     if (!selectedGroup) {
//       alert('Please select a group before adding a note.');
//       return;
//     }
//     if (!newNoteTextBoxValue.trim()) {
//       alert('Note text cannot be empty.');
//       return;
//     }
//     const groupId = selectedGroup.id;
//     const newNote = {
//       id: Date.now().toString(),
//       text: newNoteTextBoxValue,
//       time: new Date().getTime(),
//     };
//     // Update notes state to add the new note to the selected group
//     setNotes(prevNotes => ({
//       ...prevNotes,
//       [groupId]: [...(prevNotes[groupId] || []), newNote], // Add the new note to the existing notes for the group
//     }));
//     setNewNoteTextBoxValue('');
//   };

//   const saveNote = (noteId) => {
//     const groupId = selectedGroup.id;
//     // Update notes state to save the note
//     setNotes(prevNotes => ({
//       ...prevNotes,
//       [groupId]: prevNotes[groupId].map(note => {
//         if (note.id === noteId) {
//           return {
//             ...note,
//             groupId: selectedGroup.id
//           };
//         }
//         return note;
//       }),
//     }));
//   };

//   useEffect(() => {
//     localStorage.setItem('notes-app', JSON.stringify(notes));
//   }, [notes]);

//   const addGroup = (group) => {
//     setGroups([...groups, group]);
//     setShowNewNoteBox(true);
//     setSelectedGroup(group);
//   };

//   const selectGroup = (group) => {
//     setSelectedGroup(group);
//     setShowNewNoteBox(true);
//   };

//   const handleNewNoteButtonClick = () => {
//     addNote();
//     setShowNewNoteBox(false);
//   };

//   const removeGroup = (groupToRemove) => {
//     setGroups(groups.filter(group => group.id !== groupToRemove.id));
//     setNotes(prevNotes => {
//       const updatedNotes = { ...prevNotes };
//       delete updatedNotes[groupToRemove.id];
//       return updatedNotes;
//     });
//   };

//   return (
//     <div className="App">
//       <Sidebar addGroup={addGroup} groups={groups} selectGroup={selectGroup} removeGroup={removeGroup} />
//       <div className="main-content">
//         <NoteContainer notes={selectedGroup ? notes[selectedGroup.id] || [] : []} saveNote={saveNote} />

//         {showNewNoteBox && (
//           <div className="new-note-container">
//             <textarea
//               className="new-note-text"
//               placeholder="Add a new note..."
//               value={newNoteTextBoxValue}
//               onChange={(e) => setNewNoteTextBoxValue(e.target.value)}
//             />
//             <button onClick={handleNewNoteButtonClick}>Add Note</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


















import React, { useEffect, useState } from 'react';
import './App.css';

import NoteContainer from './Components/NoteContainer/NoteContainer';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  // Initialize notes and groups state with localStorage data or empty objects
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || {});
  const [groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups')) || []);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [newNoteText, setNewNoteText] = useState('');
  const [showNewNoteBox, setShowNewNoteBox] = useState(false);
  const [newNoteTextBoxValue, setNewNoteTextBoxValue] = useState('');

  const addNote = () => {
    if (!selectedGroup) {
      alert('Please select a group before adding a note.');
      return;
    }
    if (!newNoteTextBoxValue.trim()) {
      alert('Note text cannot be empty.');
      return;
    }
    const groupId = selectedGroup.id;
    const newNote = {
      id: Date.now().toString(),
      text: newNoteTextBoxValue,
      time: new Date().getTime(),
    };
    setNotes(prevNotes => ({
      ...prevNotes,
      [groupId]: [...(prevNotes[groupId] || []), newNote],
    }));
    setNewNoteTextBoxValue('');
  };

  const saveNote = (noteId) => {
    const groupId = selectedGroup.id;
    setNotes(prevNotes => ({
      ...prevNotes,
      [groupId]: prevNotes[groupId].map(note => {
        if (note.id === noteId) {
          return {
            ...note,
            groupId: selectedGroup.id
          };
        }
        return note;
      }),
    }));
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  const addGroup = (group) => {
    setGroups([...groups, group]);
    setShowNewNoteBox(true);
    setSelectedGroup(group);
  };

  const selectGroup = (group) => {
    setSelectedGroup(group);
    setShowNewNoteBox(true);
  };

  const handleNewNoteButtonClick = () => {
    addNote();
    setShowNewNoteBox(false);
  };

  return (
    <div className="App">
      <Sidebar addGroup={addGroup} groups={groups} selectGroup={selectGroup} />
      <div className="main-content">
        <NoteContainer notes={selectedGroup ? notes[selectedGroup.id] || [] : []} saveNote={saveNote} />

        {showNewNoteBox && (
          <div className="new-note-container">
            <div className="new-note-input-wrapper">
              <textarea
                className="new-note-text"
                placeholder="Add a new note..."
                value={newNoteTextBoxValue}
                onChange={(e) => setNewNoteTextBoxValue(e.target.value)}
              />
              <div
                className={`save-arrow ${newNoteTextBoxValue.length > 0 ? "black" : "grey"}`}
                onClick={handleNewNoteButtonClick}
              >
                ➡
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
