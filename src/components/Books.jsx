import Book from '../components/Book'

const Books = ({ books, handleAddToFavorites, handleAddToCart }) => {
    return (
        <>
            <h1>Books Available</h1>
            <div className="book-list">
            {books.map(el => <Book book={el} key={el.isbn13} handleAddToFavorites={handleAddToFavorites} handleAddToCart={handleAddToCart} />)}
            </div>    
        </>
    )
}

export default Books;