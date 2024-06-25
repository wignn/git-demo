import novel from './novelData';
import './index.css'

function Book() {
    // const isBuku = true;

    return (
        <div className="book-container">
            {novel.map((book, index) => (
                <div className="book" key={index}>
                    <a>{book.name}</a>
                    <img src={book.imageUrl} alt={book.name} />
                    <p>{book.description}</p>
                    {/* {(isBuku == true) ? ( <h1>ini adalah buku</h1>) : (<h1>ini bukan buku</h1>)} */}
                    <button onClick={() => window.open(book.link)}>read</button>
                </div>
            ))}
        </div>
        

    );
}


export default Book;
