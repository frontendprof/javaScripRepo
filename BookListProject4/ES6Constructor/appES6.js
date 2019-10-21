// BRR
// MSAW

class Book {
  constructor(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
  }
}


class UI {
  
  addBookToList(book){
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

  showAlert(message,className){
  // Create div
  const div=document.createElement('div');
  // Add classes
  div.className=`alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container=document.querySelector('.container');
  // Get form
  const form=document.querySelector('#book-form');
  container.insertBefore(div,form);

  // Timeout after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000);
    
  }

  deleteBook(target){
    if(target.className==='delete'){
      target.parentElement.parentElement.remove();
    }
    
  }

  clearFields(){
  document.getElementById('title').value='';
  document.getElementById('author').value='';
  document.getElementById('isbn').value='';
    
  }
}

// Event Listener for add
document.getElementById('book-form').addEventListener('submit',function(e){
    

  // Get form values
  const author=document.getElementById('title').value,
        title=document.getElementById('author').value,
        isbn=document.getElementById('isbn').value

  // Instantiate book class
  const book=new Book(title, author, isbn);
  

  // Instantiate UI class
  const ui=new UI();
  

  // Validate befor adding to the list
  if(title===""|| author==="" || isbn===""){
    ui.showAlert("Please fill in all the fields",'error')

  }else{
  // Add book to the list
  ui.addBookToList(book);

  // Show success
  ui.showAlert('The book has been added.','success')

  }

  // Clearing fields
  ui.clearFields();




  e.preventDefault();
})

// Event listener for delete
document.getElementById('book-list').addEventListener('click',function(e){

  // Instantiate UI class
  const ui=new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert("Book Removed", 'success')


  e.preventDefault();
})