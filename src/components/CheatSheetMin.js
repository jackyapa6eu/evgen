import React from 'react';

function CheatSheetMin({cheatSheet}) {
  function openCheatSheet() {
    console.log(cheatSheet.id);
  }
  return (
    <h3 className="front-end__title" onClick={openCheatSheet}>{cheatSheet.title}</h3>
  );
}

export default CheatSheetMin; 
