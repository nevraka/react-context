import BookContextProvide from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvide>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvide>
    </div>
  );
}

export default App;
