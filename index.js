const readBG = "rgb(42,245,119)"
const unreadBG = "rgb(222,92,85)"


const addBook = document.querySelector(".btn-add-book");
const grid = document.querySelector(".grid");
const modal = document.querySelector(".modal");
const form = document.querySelector(".form");

class Book {

    constructor() {
        this.myLibrary = [];
        this.init();
    }

    init = () => {
        addBook.addEventListener("click", function() {
            modal.style.display = "block";
            document.querySelector(".formposition").style.display = "block"
        })

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            newBook.addBookToLibrary()
        });

        window.onclick = function(e) {
            if (e.target == modal) {
              modal.style.display = "none";
            }
          }

        window.addEventListener("keydown", function(e) {
            if (e.key === "Escape") modal.style.display = "none";
        });

    }
    
    addBookToLibrary() {
        const author = document.querySelector("#author").value;
        const title = document.querySelector("#title").value;
        const pages = document.querySelector("#pages").value;
        const checkbox = document.querySelector("#check");
        
        this.myLibrary.push({
            id: this.myLibrary.length,
            title,
            author,
            pages,
        })

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
        
        let isRead = checkbox.checked ? true : false;

        const textContent = isRead ? "Read" : "Not Read"
        bookIsRead.textContent = textContent;

        const bgColor = isRead ? readBG : unreadBG;
        bookIsRead.style.backgroundColor = bgColor;

        bookIsRead.addEventListener ("click", function() {
            
            if (bookIsRead.style.backgroundColor === readBG) {
                bookIsRead.style.backgroundColor = unreadBG;

                const match = this.myLibrary.find (book => book.id === newBook.id)
                match.isRead = false;
                bookIsRead.textContent = "Read"

            } else if (bookIsRead.style.backgroundColor === unreadBG) {

                bookIsRead.style.backgroundColor = readBG;

                const match = this.myLibrary.find (book => book.id === newBook.id)

                match.isRead = true;
                
                bookIsRead.textContent = "Not Read"
            }
        })

        wrapper.append(bookIsRead);

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
}

const newBook = new Book();