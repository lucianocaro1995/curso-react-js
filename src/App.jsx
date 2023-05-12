import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
    return (
        <div className='container-fluid'>
            <Header />
            <NavBar />
            <ItemListContainer />
            <Footer />
        </div>
    );
}

export default App;