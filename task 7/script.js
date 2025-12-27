// Book data (fetch simulation)
const books = [
  { title: "JavaScript Basics", author: "John Smith", price: 399 },
  { title: "Learn Bootstrap", author: "Anna Lee", price: 299 },
  { title: "Web Development", author: "David Miller", price: 499 },
  { title: "HTML & CSS", author: "Sarah Brown", price: 249 }
];

// Function to display books
function displayBooks() {
  const bookList = document.getElementById("bookList");

  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-3 mb-4";

    col.innerHTML = `
      <div class="card book-card h-100 p-3">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">Author: ${book.author}</p>
        <p class="fw-bold">₹${book.price}</p>
        <button class="btn btn-primary btn-sm">Buy Now</button>
      </div>
    `;

    bookList.appendChild(col);
  }
}

// Call function
displayBooks();
