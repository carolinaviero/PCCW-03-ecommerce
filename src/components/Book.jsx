import { useState } from 'react';

const Book = ({ book, handleAddToFavorites, handleAddToCart }) => {
    const [isFav, setIsFav] = useState(false);

    const handleIsFavClick = (book) => {
        setIsFav(!isFav)
        handleAddToFavorites(book, isFav);
    }

    return (
        <div className="book">
            <button className="favorite" onClick={() => handleIsFavClick(book)}>{isFav ? '❤️' : '💛'}</button>
            <img src={book?.image} alt={book?.title} />
            <h4>{book?.title}</h4>
            <p>{book?.price}</p>
            <button onClick={() => handleAddToCart(book)}>Add to cart</button>
        </div>
    )
}

export default Book;