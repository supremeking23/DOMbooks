//const form = document.forms.namedItem("#books-form");

const form = document.querySelector("#books-form");

const books = [];

// const booksTable = document.querySelector("#books-table");
// const bookTbody = booksTable.children[1];
const addBook = (book) => {
  //console.log(book);
  books.push(book);
};

const removeBook = (isbnNumber) => {
  return books.splice(
    books.findIndex(({ isbn }) => {
      return isbn == isbnNumber;
    }),
    1
  );
};

const findBooksByISBN = (isbn) => {
  // foundbook = books.find(({ isbn }) => books.isbn == isbn);
  //return foundbook;
  // return books.map((book) => {
  //   return book.isbn == isbn;
  // });
  return books.find((book) => book.isbn == isbn);
  //return typeof isbn;
};

const showBooks = (books) => {
  let rows = books.map((book) => {
    let row = `<tr data-idisbn="${book.isbn}">
        <td>${book.isbn}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>
        <button
          class="btn btn-warning edit"
          type="button"
          style="margin-bottom: 0; margin-left: 0"
        >
          Edit</button
        ><button
          class="btn btn-danger delete"
          type="button"
          style="margin-bottom: 0; margin-left: 0"
        >
          Delete
        </button>
      </td>
    </tr>`;
    return row;
  });
  bookTbody.innerHTML = rows.join("");
  //////////////////////////////////////
  // createElement
  // books.forEach((book) => {
  //   let tr = document.createElement("tr");
  //   let tdisbn = document.createElement("td");
  //   let isbnContent = document.createTextNode(`${book.isbn}`);
  //   tdisbn.append(isbnContent);
  //   tr.append(tdisbn);
  //   let tdtitle = document.createElement("td");
  //   let titleContent = document.createTextNode(`${book.title}`);
  //   tdtitle.append(titleContent);
  //   tr.append(tdtitle);
  //   let tdauthor = document.createElement("td");
  //   let authorContent = document.createTextNode(`${book.author}`);
  //   tdauthor.append(authorContent);
  //   tr.append(tdauthor);
  //   let tdyear = document.createElement("td");
  //   let yearContent = document.createTextNode(`${book.year}`);
  //   tdyear.append(yearContent);
  //   tr.append(tdyear);
  //   let tdbuttons = document.createElement("td");
  //   let buttonEdit = document.createElement("button");
  //   let buttonDelete = document.createElement("button");
  //   buttonEdit.innerText = "Edit";
  //   buttonDelete.innerText = "Delete";
  //   const editclass = ["btn", "btn-warning", "edit"];
  //   buttonEdit.classList.add(...editclass);
  //   buttonEdit.style.marginBottom = "0px";
  //   buttonEdit.style.marginLeft = "0px";
  //   const deleteClass = ["btn", "btn-danger", "delete"];
  //   buttonDelete.classList.add(...deleteClass);
  //   buttonDelete.style.marginBottom = "0px";
  //   buttonDelete.style.marginLeft = "0px";
  //   tdbuttons.append(buttonEdit);
  //   tdbuttons.append(buttonDelete);
  //   tr.append(tdbuttons);
  //   //console.log(book);
  //   bookTbody.append(tr);
  // });
  // let rows = books.map((book) => {
  //   let tr = document.createElement("tr");
  //   let tdisbn = document.createElement("td");
  //   let isbnContent = document.createTextNode(`${book.isbn}`);
  //   tdisbn.append(isbnContent);
  //   tr.append(tdisbn);
  //   let tdtitle = document.createElement("td");
  //   let titleContent = document.createTextNode(`${book.title}`);
  //   tdtitle.append(titleContent);
  //   tr.append(tdtitle);
  //   let tdauthor = document.createElement("td");
  //   let authorContent = document.createTextNode(`${book.author}`);
  //   tdauthor.append(authorContent);
  //   tr.append(tdauthor);
  //   let tdyear = document.createElement("td");
  //   let yearContent = document.createTextNode(`${book.year}`);
  //   tdyear.append(yearContent);
  //   tr.append(tdyear);
  //   let tdbuttons = document.createElement("td");
  //   let buttonEdit = document.createElement("button");
  //   let buttonDelete = document.createElement("button");
  //   buttonEdit.innerText = "Edit";
  //   buttonDelete.innerText = "Delete";
  //   const editclass = ["btn", "btn-warning", "edit"];
  //   buttonEdit.classList.add(...editclass);
  //   buttonEdit.style.marginBottom = "0px";
  //   buttonEdit.style.marginLeft = "0px";
  //   const deleteClass = ["btn", "btn-danger", "delete"];
  //   buttonDelete.classList.add(...deleteClass);
  //   buttonDelete.style.marginBottom = "0px";
  //   buttonDelete.style.marginLeft = "0px";
  //   tdbuttons.append(buttonEdit);
  //   tdbuttons.append(buttonDelete);
  //   tr.append(tdbuttons);
  //   //console.log(book);
  //   //bookTbody.append(tr);
  //   return `${tr}`;
  // });
  // bookTbody.append(rows);
  // // bookTbody.append(rows);
  // // console.log(rows);
  // rows.forEach((row) => {
  //   bookTbody.append(row);
  // });
};

const bookTbody = document.querySelector("#books-table > tbody");

bookTbody.addEventListener("click", function (e) {
  let isbntr = e.target.parentNode.parentNode;
  let isbnNumber = isbntr.dataset.idisbn;

  if (e.target.className.includes("delete")) {
    // books.filter((book) => {
    //   return book.isbn !== isbnNumber;
    // });
    removeBook(isbnNumber);
    alert("data has been removed");
    isbntr.remove();

    console.log(books);
  } else if (e.target.className.includes("edit")) {
    console.log(form.children);
    form.children[5].classList.add("d-none");

    let arrData = Array.from(isbntr.children);

    document.querySelector("input[name='isbn']").value = arrData[0].innerText;
    document.querySelector("input[name='title']").value = arrData[1].innerText;
    document.querySelector("input[name='author']").value = arrData[2].innerText;
    document.querySelector("input[name='year']").value = arrData[3].innerText;

    //console.log(form.children[6].classList);
    form.children[6].classList.remove("d-none");
    // if (form.children[6].classList.contains("d-none")) {

    // }
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

form.addEventListener("click", function (e) {
  //e.preventDefault();

  let isbn = document.querySelector("input[name='isbn']").value;
  let title = document.querySelector("input[name='title']").value;
  let author = document.querySelector("input[name='author']").value;
  let year = document.querySelector("input[name='year']").value;

  if (e.target.classList.contains("add")) {
    let book = {
      isbn: isbn,
      title: title,
      author: author,
      year: year,
    };

    if (isbn && title && author && year) {
      addBook(book);
      form.reset();
      showBooks(books);
    } else {
      alert("field must not be empty");
    }
  } else if (e.target.classList.contains("clear")) {
    form.reset();
  } else if (e.target.classList.contains("update")) {
    const foundBook = findBooksByISBN(isbn);

    foundBook.isbn = isbn;
    foundBook.title = title;
    foundBook.author = author;
    foundBook.year = year;
    //console.log(foundBook);

    showBooks(books);
    form.reset();
    e.target.parentNode.classList.add("d-none");
    form.children[5].classList.remove("d-none");
  } else if (e.target.classList.contains("cancel")) {
    e.target.parentNode.classList.add("d-none");
    form.children[5].classList.remove("d-none");

    form.reset();
  }
});

addBook({ isbn: "A1", title: "testing", author: "test", year: "14321" });
addBook({ isbn: "A2", title: "test", author: "test", year: "14321" });
showBooks(books);
