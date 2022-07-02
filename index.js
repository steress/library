const submitBook = document.querySelector(".btn-submit");
const addBook = document.querySelector(".btn-add-book");
const grid = document.querySelector(".grid");
const modal = document.querySelector(".modal");

    let id = -1;
    
submitBook.addEventListener("click", addBookToLibrary);
addBook.addEventListener("click", function() {
    modal.style.display = "block";
    document.querySelector(".formposition").style.display = "block"
})

    let myLibrary = [];

function Book (id, title, author, pages, isRead) {
        this.id = id;
        this.title = title
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        }

function addBookToLibrary() {
    const author = document.querySelector("#author").value;
    const title = document.querySelector("#title").value;
    const pages = document.querySelector("#pages").value;
    const checkbox = document.querySelector("#check");
    id += 1;
    
    function reading() {
        if (checkbox.checked) {
            return isRead = true;
        } else {
            return isRead = false;
        }
    }
    reading();

    const newBook = new Book(id, title, author, pages, isRead);
    myLibrary.push(newBook);

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const titleInfo = document.createElement("div");
    titleInfo.textContent = `${title}`;
    wrapper.appendChild(titleInfo);

    const authorInfo = document.createElement("div");
    authorInfo.textContent = `${author}`;
    wrapper.appendChild(authorInfo);

    const pagesInfo = document.createElement("div");
    pagesInfo.textContent = `${pages}` + " " + "pages";
    wrapper.appendChild(pagesInfo);

    const bookIsRead = document.createElement("button");
    bookIsRead.classList.add("toggle");
    function backgroundColor() {
        if (isRead === true) {
            bookIsRead.style.backgroundColor = "rgb(42, 245, 119)"
            bookIsRead.textContent = "Read"
        } else {
            bookIsRead.style.backgroundColor = "rgb(222, 92, 85)";
            bookIsRead.textContent = "Not Read"
        }
    }
    backgroundColor();
    wrapper.appendChild(bookIsRead);

    bookIsRead.addEventListener("click", function() {
        if (bookIsRead.style.backgroundColor === "rgb(42, 245, 119)") {
            bookIsRead.style.backgroundColor = "rgb(222, 92, 85)"
            changeIsRead = myLibrary.findIndex((obj => obj.id == `${newBook.id}`));
            myLibrary[changeIsRead].isRead = false;
            bookIsRead.textContent = "Not Read"
        } else {
            if (bookIsRead.style.backgroundColor === "rgb(222, 92, 85)") {
                bookIsRead.style.backgroundColor = "rgb(42, 245, 119)"
                changeIsRead = myLibrary.findIndex((obj => obj.id == `${newBook.id}`));
                myLibrary[changeIsRead].isRead = true;
                bookIsRead.textContent = "Read"
            }
        }
    })

    const deleteInfo = document.createElement("button");
    deleteInfo.classList.add("delete-button");
    deleteInfo.innerText = "Remove";
    wrapper.appendChild(deleteInfo);
    
    grid.appendChild(wrapper);

    deleteInfo.addEventListener("click", function(){
        let i = myLibrary.findIndex(i => i.id == `${newBook.id}`);
        myLibrary.splice(i, 1);
        grid.removeChild(wrapper);
    })
        document.querySelector(".formposition").style.display = "none"
        document.querySelector(".form").reset();    
        modal.style.display = "none"; 

        
}
window.onclick = function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }
window.addEventListener("keydown", function(e) {
    if (e.key === "Escape") modal.style.display = "none";
});
