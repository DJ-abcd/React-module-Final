// import React from 'react'
// import Note from '../Note/Note'
// import './NoteContainer.css'
// import imageSrc from '../../assests/background.png'




// function NoteContainer(props) {
  
//     const reverseArray=(arr)=>{
//         const array=[]

//         for(let i=arr.length -1;i>=0;--i){
//             array.push(arr[i])
//         }
//         return array
//     }
//  const notes=reverseArray(props.notes)

//   return (
//     <div className="note-container">
   
//         <h2>Pockets Notes</h2>
//         <div className='note-container_notes custom-scroll'>


//             { notes?.length > 0 ? (
//                 notes.map((item)=> <Note
//                 key={item.id}
//                 note={item} updateText={props.updateText}
//             />)) : (
//                 <div className="no-notes-container">
//                         <img src={imageSrc} alt="Image Preview" /> 
//                         <h1>Pocket Notes</h1>
//                         <h4>Send and receive messages without keeping your phone online.<br></br>
//                         Use Pocket Notes on up to 4 linked devices and 1 mobile phone</h4>
//                     </div>
                
                
//             )}

        

//     </div>
                
// </div>

//     );
// }
 
  

// export default NoteContainer





// NoteContainer.js





























// // NoteContainer.js



// import React from 'react';
// import Note from '../Note/Note';
// import './NoteContainer.css';
// import imageSrc from '../../assests/background.png'
// import plusIcon from '../../assests/plus.png';


// function NoteContainer(props) {
//   return (
//     <div className="note-container">
//       <h2>Pockets Notes</h2>
//       <div className='note-container_notes custom-scroll'>
//         {props.notes.reverse().map((note) => ( // Reverse the order of notes
//           <Note key={note.id} note={note} saveNote={props.saveNote} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NoteContainer;










// import React from 'react';
// import Note from '../Note/Note';
// import './NoteContainer.css';
// import imageSrc from '../../assests/background.png'
// import plusIcon from '../../assests/plus.png';

// function NoteContainer(props) {
//   const renderNotes = () => {
//     if (props.notes.length === 0) {
//       return (
//         <div className="no-notes-container">
//           <img src={imageSrc} alt="Image Preview" /> 
//           <h1>Pocket Notes</h1>
//           <h4>Send and receive messages without keeping your phone online.<br />Use Pocket Notes on up to 4 linked devices and 1 mobile phone</h4>
//         </div>
//       );
//     } else {
//       return props.notes.reverse().map((note) => (
//         <Note key={note.id} note={note} saveNote={props.saveNote} />
//       ));
//     }
//   };

//   return (
//     <div className="note-container">
//       <h2>Pockets Notes</h2>
//       <div className='note-container_notes custom-scroll'>
//         {renderNotes()}
//         <div className="note add-note">
//           <textarea
//             className="note_text"
//             placeholder="Add a new note..."
//             value={props.newNoteText}
//             onChange={(e) => props.setNewNoteText(e.target.value)}
//           />
//           <img
//             src={plusIcon}
//             alt="Add"
//             className="add-icon"
//             onClick={props.addNote}
            
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NoteContainer;






import React from 'react';
import Note from '../Note/Note';
import './NoteContainer.css';
import imageSrc from '../../assests/background.png'
import plusIcon from '../../assests/plus.png';

function NoteContainer(props) {
  const renderNotes = () => {
    if (props.notes.length === 0) {
      return (
        <div className="no-notes-container">
          <img src={imageSrc} alt="Image Preview" /> 
          <h1>Pocket Notes</h1>
          <h4>Send and receive messages without keeping your phone online.<br />Use Pocket Notes on up to 4 linked devices and 1 mobile phone</h4>
        </div>
      );
    } else {
      return props.notes.map((note) => ( // Reverse the order here
        <Note key={note.id} note={note} saveNote={props.saveNote} />
      )).reverse(); // Reverse the order
    }
  };

  return (
    <div className="note-container">
      <h2>Pockets Notes</h2>
      <div className='note-container_notes custom-scroll'>
        {renderNotes()}
        <div className="note add-note">
          <textarea
            className="note_text"
            placeholder="Add a new note..."
            value={props.newNoteText}
            onChange={(e) => props.setNewNoteText(e.target.value)}
          />
          <img
            src={plusIcon}
            alt="Add"
            className="add-icon"
            onClick={props.addNote}
          />
        </div>
      </div>
    </div>
  );
}

export default NoteContainer;







































































// NoteContainer.js

