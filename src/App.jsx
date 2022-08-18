import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Books from './components/Books';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [price, setPrice] = useState(0);
  const [booksInCart, setBooksInCart] = useState([]);

  const fetchData = () => {
    fetch('https://api.itbook.store/1.0/new')
      .then(res => res.json())
      .then(data => setData(data.books))
  }

  useEffect(fetchData, [])

  const handleAddToFavorites = (book) => {
    const foundBook = favoriteBooks.find(b => b.isbn13 === book.isbn13);

    if (foundBook) {
      setFavoriteBooks(favoriteBooks.filter(b => b.isbn13 !== book.isbn13))
    } else {
      setFavoriteBooks([...favoriteBooks, book])
    }
  }

  const handleAddToCart = (book) => {
    const total = price + Number(book.price.substring(1));
    setPrice(total);

    let isInCart = booksInCart.find(b => b.isbn13 === book.isbn13);

    let newCart = [...booksInCart];

    if (!isInCart) {
      isInCart = { ...book, quantity: 1 }
      newCart.push(isInCart)
    } else {
      isInCart.quantity ++;
    }

    setBooksInCart(newCart)
  }

  return (
    <Router>
      <div className="App">
        <Navbar total={price} />
        <Routes>
          <Route path="/" element={<Books books={data} handleAddToFavorites={handleAddToFavorites} handleAddToCart={handleAddToCart} />} />
          <Route path="/favorites" element={<Favorites favoriteBooks={favoriteBooks} />} />
          <Route path="/cart" element={<Cart booksInCart={booksInCart} total={price} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
