window.onload=function(){
    
    document.querySelector("#submit").addEventListener("click",function(addNewBook)

      
        {
            
            console.log("clicked")
            addNewBook.preventDefault();
            fetch("http://localhost:8000/citylibrary/api/book/add", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                "book_title": document.getElementById("title").value,
                ISBN: document.getElementById("isbn").value,
                overdue_fee: document.getElementById("overdueFee").value,
                publisher: document.getElementById("publisher").value,
                "date_published":document.getElementById("datePublished").value,
              }),
            }) 
              .then((data) => data.json())
              .then((data) => {
                console.log(data);
                document.querySelector("#bookForm").reset();
              });
              document.getElementById("savedmessage").innerHTML="book saved sucesfully" 
              document.getElementById("savedmessage").style.color="Red";
          }
         
        
              
)

}