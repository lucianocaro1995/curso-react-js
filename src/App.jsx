import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer';

function App() {
    return (
        <div className='container-fluid m-0 p-0'>
            <Header />
            <NavBar />
            <ItemListContainer greeting={"Bienvenidos a mi ecommerce"}/>
            <Footer />
        </div>
    );
}

export default App;