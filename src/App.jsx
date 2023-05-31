import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import DataProvider from './Components/DataContext/DataContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
}

export default App;

// <Route path='/category/:id' element={<ItemListContainer />} />
// <Route path='/*' element={<Error404 />} />