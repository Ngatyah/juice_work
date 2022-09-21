import './App.css';
import InputSection from './components/inputSection/InputSection';
import { BsQuestionCircle } from 'react-icons/bs';
import SearchComponent from './components/searchComponent/SearchComponent';
function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchComponent />
        <div className='title'>
          <h1>Front-End Developer Test Project</h1>
          <hr />
          <p >Your goal is to make a page that looks like this one, and has the ability to create H1 text simply by typing / then 1, then typing text, and hitting enter.</p>
        </div>
        <InputSection />
      </div>
      <BsQuestionCircle className='site_icon' />
    </div>

  );
}

export default App;
