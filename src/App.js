import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Intro from './Intro'
import Calling from './Calling'
import Contact from './Contact';
import Contacts from './Contacts';
import History  from './History'
import Error from './Error';
import EditContactForm from './EditContactForm';
import ContactForm from './ContactContactForm';

function App() {
   return (
    <Router>
      <Routes>
        <Route  path='/' element={<Intro/>} />
        <Route  path='/home' element={<Home/>} />
        <Route  path='/calling/:id' element={<Calling/>} />
        <Route  path='/contact/:id' element={<Contact/>} />
        <Route  path='/createContact' element={<ContactForm/>} />
        <Route  path='/contacts' element={<Contacts/>} />
        <Route  path='/history' element={<History/>} />
        <Route  path='/editContact/:id' element={<EditContactForm/>} />
        <Route  path='*' element={<Error/>} />
      </Routes>
  </Router>
  );
}

export default App;
