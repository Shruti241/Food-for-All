import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import { Banner } from './components/Banner';
import { Pastwork } from './components/Pastwork';
import { Initiatives } from './components/Initiatives';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { Volunteer } from './components/Volunteer';
import { OrganizeFoodDrive } from './components/OrganizeFoodDrive';
import DonateFunds from './components/DonateFunds';
import DonateFoodKits from './components/DonateFoodKits';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    {/* <Chat/> */}
    <Pastwork/>
    <Initiatives/>
    <Volunteer/>
    <OrganizeFoodDrive/>
    <DonateFunds/>
    <DonateFoodKits/>
    <ContactForm/>
    <Footer/>
    <ScrollToTopButton/>
    </div>
  );
}

export default App;
