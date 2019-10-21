// BRR
// MSAW


// Book Constructor
function Book(author,title,isbn){
  this.title=title;
  this.author=author;
  this.isbn=isbn;
  }



// UI Constructor
function UI(){ }

// Add a book to the list
UI.prototype.addBookToList = function(book){
  const list=document.getElementById('book-list');
  
  // Create tr element
  const row=document.createElement('tr');
  
  // Insert cols
  row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
  list.appendChild(row);
}

UI.prototype.clearFields=function(){
  document.getElementById('title').value='';
  document.getElementById('author').value='';
  document.getElementById('isbn').value='';
}

  // Event Listeners
  document.getElementById('book-form').addEventListener('submit',function(e){
    

    // Get form values
    const author=document.getElementById('title').value,
          title=document.getElementById('author').value,
          isbn=document.getElementById('isbn').value

    // Instantiate book class
    const book=new Book(title, author, isbn);
    

    // Instantiate UI class
    const ui=new UI();
    console.log(ui)

    // Add book to the list
    ui.addBookToList(book);

    // Clearing fields
    ui.clearFields();




    e.preventDefault();
  })