import Book from '../components/Book'

const Cart = ({ booksInCart, total }) => {
    return (
        <>
            <div className="book-list">
                {booksInCart.map(b => <Book book={b} key={b.isbn13} />)}
            </div>
            <h2>Total: ${total.toFixed(2)}</h2>
        </>
    )
}

export default Cart;