import axios from 'axios';

const TOP_BOOKS = 'https://books-backend.p.goit.global/books/top-books';

getTopBooks(TOP_BOOKS).then().catch();

async function getTopBooks() {
    const response = await axios.get(TOP_BOOKS);
    console.log(response);
    const { category,title, rank, book_image, author, _id } = response.data.books
    console.log(title);
    // const topBooks = response
    //   .sort(book => book.rank)
    //   .map(({ title, rank, book_image, author, _id }) => {
    //     const markup = `<li class="book-item">
    //                 <img src="${book_image}" alt="${title}" width="180" height="256" />
    //                 <h3 class="book-name">IT STARTS WITH US</h3>
    //                 <p class="author-name">${author}</p>
    //             </li>`.join();
    //   });

  
}
