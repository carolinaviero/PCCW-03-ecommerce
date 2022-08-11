import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Book from './components/Book';
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
    <div className="App">
      <Navbar total={price} />
      <h1>Books Available</h1>
      <div className="book-list">{data.map(el => <Book book={el} key={el.isbn13} handleAddToFavorites={handleAddToFavorites} handleAddToCart={handleAddToCart} />)}</div>
      <Book />
    </div>
  );
}

export default App;
