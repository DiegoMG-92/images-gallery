import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Search from './Components/Search';

const App = () => {
    const [word, setWord] = useState('');

    const handleSearchSubmit = (e) => {
      e.preventDefault();
      console.log(word);
    }

    console.log(word);

  return (
    <div>
      <Header title="Images Gallery 2" />
      <Search word = {word} setWord = {setWord} handleSubmit = {handleSearchSubmit} />
    </div>
  );
};
export default App;