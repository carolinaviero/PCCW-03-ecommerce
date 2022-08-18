import Book from '../components/Book'

const Favorites = ({ favoriteBooks }) => {
    return (
        <div className="book-list">
           { favoriteBooks.map(b => <Book book={b} key={b.isbn13} isFavorited={true} />)}
        </div>
    )
}

export default Favorites;