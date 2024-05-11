import React from 'react'
import './Note.css';

let timer=500,timeout

function Note(props) {
    
     const formatDate=(value)=>{
      if(!value) return ""
      const date=new Date(value);
      
      const monthNames=["Jan","Feb","March","April","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

      let hrs=date.getHours()
      let amPm=hrs>12?"PM":"AM";
      hrs=hrs?hrs:"12";
      hrs=hrs>12?(hrs=24-hrs):hrs;

      let min=date.getMinutes()
      // min=min<10?"0"+min:min;
      let day = date.getDate();
      const month = monthNames[date.getMonth()]
   
   return`${month}${day} ${hrs}:${min}${amPm}`;
   
    };
  const debounce=(func)=>{
    clearTimeout(timeout)
    timeout=setTimeout(func,timer);
  }

  const updateText=(text,id)=>{
    debounce(()=>props.updateText(text,id))
  }

   
  return ( <div className="note" >
    <textarea 
    className="note_text" defaultValue={props.note.text}
    onChange={(event)=> updateText(event.target.value,props.note.id)} />
    <p>{formatDate(props.note.time)} </p>
  </div>
  );
}

export default Note


// style={{backgroundColor:props.note.color}}










// Note.js

// import React from 'react';
// import './Note.css';
// import { FaSave } from 'react-icons/fa'; // Importing save icon from react-icons library

// let timer = 500,
//   timeout;

// function Note(props) {
//   const formatDate = (value) => {
//     if (!value) return '';
//     const date = new Date(value);

//     const monthNames = [
//       'Jan',
//       'Feb',
//       'March',
//       'April',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sept',
//       'Oct',
//       'Nov',
//       'Dec'
//     ];

//     let hrs = date.getHours();
//     let amPm = hrs > 12 ? 'PM' : 'AM';
//     hrs = hrs ? hrs : '12';
//     hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

//     let min = date.getMinutes();
//     // min=min<10?"0"+min:min;
//     let day = date.getDate();
//     const month = monthNames[date.getMonth()];

//     return `${month}${day} ${hrs}:${min}${amPm}`;
//   };

//   const debounce = (func) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(func, timer);
//   };

//   const updateText = (text, id) => {
//     debounce(() => props.updateText(text, id));
//   };

//   const handleSaveNote = () => {
//     // Call saveNote function from props to save the note to the selected group
//     props.saveNote();
//   };

//   return (
//     <div className="note">
//       <textarea
//         className="note_text"
//         defaultValue={props.note.text}
//         onChange={(event) => updateText(event.target.value, props.note.id)}
//       />
//       <p>{formatDate(props.note.time)}</p>
//       <FaSave className="save-icon" onClick={handleSaveNote} /> {/* Save icon */}
//     </div>
//   );
// }

// export default Note;



