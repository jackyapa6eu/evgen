import React from 'react';
import firebase from 'firebase/app';
import "firebase/database";
import CheatSheetMin from './CheatSheetMin';

function Frontend({showLoader, hideLoader}) {
  const [cheatSheets, setCheatSheets] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  React.useEffect(() => { 
    const cheatSheetsRef = firebase.database().ref('frontEnd/');
    showLoader();
    cheatSheetsRef.once('value', (snapshot) => {
      if (snapshot.val() === null) {
        hideLoader()
        return
      }
      const obj = snapshot.val();
      const cheatSheetsArr = []
      for (let i = 0; i < Object.keys(obj).length; i++) {
          const cheatSheet = obj[Object.keys(obj)[i]];
          cheatSheet.id = Object.keys(obj)[i];
          cheatSheetsArr.unshift(cheatSheet);
      }
      setCheatSheets(cheatSheetsArr);
      hideLoader()
    }); 
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSearchTextInput(event) {
    setSearchText(event.target.value);
  }

  function clearSearchInput(event) {
    event.preventDefault();
    setSearchText('');
  }

  return (
    <section className="front-end">
      <form className="front-end__search-form">
        <input 
          type="text" 
          className="front-end__search-input" 
          placeholder="поиск" 
          onChange={handleSearchTextInput} 
          value={searchText || ''}
        />
        { (searchText !== '') && <button className="front-end__search-clear-btn" onClick={clearSearchInput}>сброс</button> }
      </form>
      
      {cheatSheets.map((cheatSheet) => {
        return( 
          cheatSheet.title
            .toLowerCase()
            .includes(searchText.toLowerCase()) 
            && <CheatSheetMin key={cheatSheet.id} cheatSheet={cheatSheet}/> )
      })}
    </section>
  );
}

export default Frontend; 