


// import React, { useState } from "react";

// import plusIcon from '../../assests/plus.png';

// import "./Sidebar.css";

// function Sidebar(props) {
//   const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

//   const [listOpen, setListOpen] = useState(false);

//   return (
//     <div className="sidebar">
//       <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
//       <div className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
//         <div className="color-picker">
//           <h3>Choose color</h3>
//         {colors.map((item, index) => (
//           <div
//             key={index}
//             className="color-circle"
//             style={{ backgroundColor: item }}
//             onClick={() => props.addNote(item)}
//           />
//         ))}
      
//     </div>
//     <div className="group-section">
//     <h3>Group Name</h3>
//     <input type="text" placeholder="Enter Group Name"/>
//     <button>Create</button>
//     </div>
//     </div>
   
//     </div>
//   );
// }

// export default Sidebar;











// import React, { useState } from "react";
// import plusIcon from '../../assests/plus.png';
// import "./Sidebar.css";

// function Sidebar(props) {
//   const colors = ["#B38BFA", "#FF79F2", "#43E6FC","#F19576", "#0047FF", "#6691FF"];

//   const [listOpen, setListOpen] = useState(false);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [groupName, setGroupName] = useState('');

//   const toggleListOpen = () => {
//     setListOpen(!listOpen);
//   };

//   const handleColorSelect = (color) => {
//     setSelectedColor(color);
//   };

//   const handleGroupCreate = () => {
//     if (groupName && selectedColor) {
//       props.addGroup(groupName, selectedColor);
//       setGroupName('');
//       setSelectedColor(null);
//       toggleListOpen();
//     } else {
//       alert('Please enter a group name and select a color.');
//     }
//   };

//   return (
//     <div className="sidebar">
//       <img
//         src={plusIcon}
//         alt="Add"
//         className={`plus-icon ${listOpen ? "rotate" : ""}`}
//         onClick={toggleListOpen}
//       />
//       {listOpen && (
//         <div className="sidebar_overlay" onClick={toggleListOpen}>
//           <div className="sidebar_list" onClick={(e) => e.stopPropagation()}>
//             <div className="color-picker">
//               <h3>Choose color</h3>
//               {colors.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`color-circle ${selectedColor === item ? 'selected' : ''}`}
//                   style={{ backgroundColor: item }}
//                   onClick={() => handleColorSelect(item)}
//                 />
//               ))}
//             </div>
//             <div className="group-section">
//               <h3>Group Name</h3>
//               <input 
//                 type="text" 
//                 placeholder="Enter Group Name" 
//                 value={groupName} 
//                 onChange={(e) => setGroupName(e.target.value)}
//               />
//               <button onClick={handleGroupCreate}>Create</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Sidebar;








// import React, { useState } from "react";
// import plusIcon from '../../assests/plus.png';
// import "./Sidebar.css";

// function Sidebar(props) {
//   const colors = ["#B38BFA", "#FF79F2", "#43E6FC","#F19576", "#0047FF", "#6691FF"];

//   const [listOpen, setListOpen] = useState(false);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [groupName, setGroupName] = useState('');

//   const toggleListOpen = () => {
//     setListOpen(!listOpen);
//   };

//   const handleColorSelect = (color) => {
//     setSelectedColor(color);
//   };

//   const handleGroupCreate = () => {
//     if (groupName && selectedColor) {
//       props.addGroup(groupName, selectedColor);
//       setGroupName('');
//       setSelectedColor(null);
//       toggleListOpen();
//     } else {
//       alert('Please enter a group name and select a color.');
//     }
//   };

//   console.log("Selected Color:", selectedColor);
//   console.log("Group Name:", groupName);

//   return (
//     <div className="sidebar">
//       <img
//         src={plusIcon}
//         alt="Add"
//         className={`plus-icon ${listOpen ? "rotate" : ""}`}
//         onClick={toggleListOpen}
//       />
//       {listOpen && (
//         <div className="sidebar_overlay" onClick={toggleListOpen}>
//           <div className="sidebar_list" onClick={(e) => e.stopPropagation()}>
//             <div className="color-picker">
//               <h3>Choose color</h3>
//               {colors.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`color-circle ${selectedColor === item ? 'selected' : ''}`}
//                   style={{ backgroundColor: item }}
//                   onClick={() => handleColorSelect(item)}
//                 />
//               ))}
//             </div>
//             <div className="group-section">
//               <h3>Group Name</h3>
//               <input 
//                 type="text" 
//                 placeholder="Enter Group Name" 
//                 value={groupName} 
//                 onChange={(e) => setGroupName(e.target.value)}
//               />
//               <button onClick={handleGroupCreate}>Create</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Sidebar;




















// group name in sideba










// import React, { useState } from "react";
// import plusIcon from '../../assests/plus.png';
// import "./Sidebar.css";

// function Sidebar(props) {
//   const colors = ["#B38BFA", "#FF79F2", "#43E6FC","#F19576", "#0047FF", "#6691FF"];

//   const [listOpen, setListOpen] = useState(false);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [groupName, setGroupName] = useState('');
//   const [groups, setGroups] = useState([]);

//   const toggleListOpen = () => {
//     setListOpen(!listOpen);
//   };

//   const handleColorSelect = (color) => {
//     setSelectedColor(color);
//   };

//   const handleGroupCreate = () => {
//     if (groupName && selectedColor) {
//       const newGroup = { name: groupName, color: selectedColor };
//       setGroups([...groups, newGroup]);
//       setGroupName('');
//       setSelectedColor(null);
//       toggleListOpen();
//     } else {
//       alert('Please enter a group name and select a color.');
//     }
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h2>Groups</h2>
//       </div>
//       <ul className="group-list">
//         {groups.map((group, index) => (
//           <li key={index}>
//             <span className="color-circle" style={{ backgroundColor: group.color }} />
//             <span className="group-name">{group.name}</span>
//           </li>
//         ))}
//       </ul>
//       <img
//         src={plusIcon}
//         alt="Add"
//         className={`plus-icon ${listOpen ? "rotate" : ""}`}
//         onClick={toggleListOpen}
//       />
//       {listOpen && (
//         <div className="sidebar_overlay" onClick={toggleListOpen}>
//           <div className="sidebar_list" onClick={(e) => e.stopPropagation()}>
//             <div className="color-picker">
//               <h3>Choose color</h3>
//               {colors.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`color-circle ${selectedColor === item ? 'selected' : ''}`}
//                   style={{ backgroundColor: item }}
//                   onClick={() => handleColorSelect(item)}
//                 />
//               ))}
//             </div>
//             <div className="group-section">
//               <h3>Group Name</h3>
//               <input 
//                 type="text" 
//                 placeholder="Enter Group Name" 
//                 value={groupName} 
//                 onChange={(e) => setGroupName(e.target.value)}
//               />
//               <button onClick={handleGroupCreate}>Create</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Sidebar;






// import React, { useState } from "react";
// import plusIcon from '../../assests/plus.png';
// import "./Sidebar.css";

// function Sidebar(props) {
//   const colors = ["#B38BFA", "#FF79F2", "#43E6FC","#F19576", "#0047FF", "#6691FF"];

//   const [listOpen, setListOpen] = useState(false);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [groupName, setGroupName] = useState('');
//   const [groups, setGroups] = useState([]);

//   const toggleListOpen = () => {
//     setListOpen(!listOpen);
//   };

//   const handleColorSelect = (color) => {
//     setSelectedColor(color);
//   };

//   const handleGroupCreate = () => {
//     if (groupName && selectedColor) {
//       const newGroup = { name: groupName, color: selectedColor };
//       setGroups([...groups, newGroup]);
//       setGroupName('');
//       setSelectedColor(null);
//       toggleListOpen();
//     } else {
//       alert('Please enter a group name and select a color.');
//     }
//   };

//   const getInitials = (name) => {
//     const words = name.split(' ');
//     let initials = words[0].charAt(0).toUpperCase();
//     if (words.length > 1) {
//       initials += words[1].charAt(0).toUpperCase();
//     }
//     return initials;
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h2>Pocket Notes</h2>
//       </div>
//       <ul className="group-list">
//         {groups.map((group, index) => (
//           <li key={index}>
//             <div className="color-circle" style={{ backgroundColor: group.color }}>
//               <span className="initials">{getInitials(group.name)}</span>
//             </div>
//             <span className="group-name">{group.name}</span>
//           </li>
//         ))}
//       </ul>
//       <img
//         src={plusIcon}
//         alt="Add"
//         className={`plus-icon ${listOpen ? "rotate" : ""}`}
//         onClick={toggleListOpen}
//       />
//       {listOpen && (
//         <div className="sidebar_overlay" onClick={toggleListOpen}>
//           <div className="sidebar_list" onClick={(e) => e.stopPropagation()}>
//             <div className="color-picker">
//               <h3>Choose color</h3>
//               {colors.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`color-circle ${selectedColor === item ? 'selected' : ''}`}
//                   style={{ backgroundColor: item }}
//                   onClick={() => handleColorSelect(item)}
//                 />
//               ))}
//             </div>
//             <div className="group-section">
//               <h3>Group Name</h3>
//               <input 
//                 type="text" 
//                 placeholder="Enter Group Name" 
//                 value={groupName} 
//                 onChange={(e) => setGroupName(e.target.value)}
//               />
//               <button onClick={handleGroupCreate}>Create</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Sidebar;





































// Running final 

import React, { useState } from "react";
import plusIcon from '../../assests/plus.png';
import "./Sidebar.css";

function Sidebar(props) {
  const colors = ["#B38BFA", "#FF79F2", "#43E6FC","#F19576", "#0047FF", "#6691FF"];

  const [listOpen, setListOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [groupName, setGroupName] = useState('');

  const toggleListOpen = () => {
    setListOpen(!listOpen);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleGroupCreate = () => {
    if (groupName && selectedColor) {
      const newGroup = { name: groupName, color: selectedColor };
      props.addGroup(newGroup); // Notify App component about the new group
      setGroupName('');
      setSelectedColor(null);
      toggleListOpen();
    } else {
      alert('Please enter a group name and select a color.');
    }
  };

  const handleGroupClick = (group) => {
    props.selectGroup(group); // Notify App component about the selected group
  };

  const formatGroupName = (groupName) => {
    return groupName
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('');
  };


  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Pocket Notes</h2>
      </div>
      <ul className="group-list">
        {props.groups.map((group, index) => (
          <li key={index} onClick={() => handleGroupClick(group)}> {/* Handle group click */}
            <div className="color-circle" style={{ backgroundColor: group.color }}>
              <span className="initials">{formatGroupName(group.name)}</span>
            </div>
            <span className="group-name">{group.name}</span>
          </li>
        ))}
      </ul>
      <img
        src={plusIcon}
        alt="Add"
        className={`plus-icon ${listOpen ? "rotate" : ""}`}
        onClick={toggleListOpen}
      />
      {listOpen && (
        <div className="sidebar_overlay" onClick={toggleListOpen}>
          <div className="sidebar_list" onClick={(e) => e.stopPropagation()}>
            <div className="color-picker">
              <h3>Choose color</h3>
              {colors.map((item, index) => (
                <div
                  key={index}
                  className={`color-circle ${selectedColor === item ? 'selected' : ''}`}
                  style={{ backgroundColor: item }}
                  onClick={() => handleColorSelect(item)}
                />
              ))}
            </div>
            <div className="group-section">
              <h3>Group Name</h3>
              <input 
                type="text" 
                placeholder="Enter Group Name" 
                value={groupName} 
                onChange={(e) => setGroupName(e.target.value)}
              />
              <button onClick={handleGroupCreate}>Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;






































// Sidebar.js















// Sidebar.js

// import React, { useState } from "react";
// import plusIcon from '../../assests/plus.png';
// import "./Sidebar.css";

// function Sidebar(props) {
//   const colors = ["#B38BFA", "#FF79F2", "#43E6FC","#F19576", "#0047FF", "#6691FF"];

//   const [listOpen, setListOpen] = useState(false);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [groupName, setGroupName] = useState('');
//   const [showAddNote, setShowAddNote] = useState(false);
//   const [newNoteText, setNewNoteText] = useState('');

//   const toggleListOpen = () => {
//     setListOpen(!listOpen);
//   };

//   const handleColorSelect = (color) => {
//     setSelectedColor(color);
//   };

//   const handleGroupCreate = () => {
//     if (groupName && selectedColor) {
//       const newGroup = { name: groupName, color: selectedColor };
//       props.addGroup(groupName, selectedColor);
//       setGroupName('');
//       setSelectedColor(null);
//       toggleListOpen();
//     } else {
//       alert('Please enter a group name and select a color.');
//     }
//   };

//   const handleGroupClick = () => {
//     setShowAddNote(true);
//   };

//   const handleAddNote = () => {
//     if (newNoteText.trim() !== '') {
//       props.addNoteToGroup(groupName, newNoteText);
//       setNewNoteText('');
//     } else {
//       alert('Please enter a note text.');
//     }
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h2>Pocket Notes</h2>
//       </div>
//       <ul className="group-list">
//         {props.groups.map((group, index) => (
//           <li key={index} onClick={() => handleGroupClick(group.name)}>
//             <div className="color-circle" style={{ backgroundColor: group.color }}>
//               <span className="initials">{group.name.charAt(0).toUpperCase()}</span>
//             </div>
//             <span className="group-name">{group.name}</span>
//           </li>
//         ))}
//       </ul>
//       <img
//         src={plusIcon}
//         alt="Add"
//         className={`plus-icon ${listOpen ? "rotate" : ""}`}
//         onClick={toggleListOpen}
//       />
//       {listOpen && (
//         <div className="sidebar_overlay" onClick={toggleListOpen}>
//           <div className="sidebar_list" onClick={(e) => e.stopPropagation()}>
//             <div className="color-picker">
//               <h3>Choose color</h3>
//               {colors.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`color-circle ${selectedColor === item ? 'selected' : ''}`}
//                   style={{ backgroundColor: item }}
//                   onClick={() => handleColorSelect(item)}
//                 />
//               ))}
//             </div>
//             <div className="group-section">
//               <h3>Group Name</h3>
//               <input 
//                 type="text" 
//                 placeholder="Enter Group Name" 
//                 value={groupName} 
//                 onChange={(e) => setGroupName(e.target.value)}
//               />
//               <button onClick={handleGroupCreate}>Create</button>
//             </div>
//           </div>
//         </div>
//       )}
//       {showAddNote && (
//         <div className="add-note">
//           <textarea
//             className="note-text"
//             placeholder="Add a new note..."
//             value={newNoteText}
//             onChange={(e) => setNewNoteText(e.target.value)}
//           />
//           <button className="add-note-btn" onClick={handleAddNote}>Add</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Sidebar;



















// Sidebar.js

// Sidebar.js
