window.onload=function()
{
  fetchBooks();
  async function fetchBooks(){
    const allBooks= await (await fetch("http://localhost:8000/citylibrary/api/book/list")).json();
    
    const tbody=document.querySelector('#bookData');
    allBooks.forEach(book=>{
      let tr;
       tr=document.createElement('tr');
      tr.innerHTML=`
      <td>${book.book_title}</td>
      <td>${book.ISBN}</td>
      <td>${book.overdue_fee}</td>
      <td>${book.publisher}</td>
      <td>${book.date_published}</td>`
     
      tbody.appendChild(tr);
   
    })
   }
   
   }