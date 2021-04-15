import el from './dom.js';
import * as api from './data.js';

window.addEventListener('load', () => {
    const table = document.querySelector('table tbody');
    document.getElementById('loadBooks').addEventListener('click', displayBooks);

    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');
    document.querySelector('form > button').addEventListener('click', createBook);

    async function createBook(e) {
        e.preventDefault();

        const book = {
            title: titleInput.value,
            author: authorInput.value,
            isbn: isbnInput.value
        };
        let valid = true;
        Object.entries(book).find(([k, v]) => {
            if (v.length === 0) {
                alert(`Book ${k} cannot be empty!`);
                valid = false;
                return true;
            } else {
                return false;
            }
        });
        if (valid === false) {
            return;
        }

        try {
            const created = await api.createBook(book);
            displayBooks();
            titleInput.value = '';
            authorInput.value = '';
            isbnInput.value = '';
        } catch (err) {
            alert(err);
            console.error(err);
        }
    }

    async function displayBooks() {
        table.innerHTML = '<tr><td colspan="4">Loading...</td></tr>';
        const books = await api.getBooks();
        table.innerHTML = '';
        books
            .sort((a, b) => a.author.localeCompare(b.author))
            .forEach(b => table.appendChild(renderBook(b)));
    }

    function renderBook(book) {
        const deleteBtn = el('button', 'Delete');
        deleteBtn.addEventListener('click', () => deleteBook(book.objectId));

        const editBtn = el('button', 'Edit');
        editBtn.addEventListener('click', toggleEditor);

        const element = el('tr', [
            el('td', book.title),
            el('td', book.author),
            el('td', book.isbn),
            el('td', [
                editBtn,
                deleteBtn,
            ]),
        ]);

        return element;

        async function toggleEditor() {
            const confirmBtn = el('button', 'Save');
            confirmBtn.addEventListener('click', () => {
                let editedBook = {
                    objectId: book.objectId,
                    title: document.getElementById('editTitle').value,
                    author: document.getElementById('editAuthor').value,
                    isbn: document.getElementById('editIsbn').value
                };

                let valid = true;
                Object.entries(editedBook).find(([k, v]) => {
                    if (v.length === 0) {
                        alert(`Book ${k} cannot be empty!`);
                        valid = false;
                        return true;
                    } else {
                        return false;
                    }
                });
                if (valid === false) {
                    return;
                }

                editBook(editedBook);
            });

            const cancelBtn = el('button', 'Cancel');
            cancelBtn.addEventListener('click', () => {
                table.replaceChild(element, editor);
            });

            const edit = {
                title: el('input', null, { type: 'text', id: 'editTitle', value: book.title }),
                author: el('input', null, { type: 'text', id: 'editAuthor', value: book.author }),
                isbn: el('input', null, { type: 'text', id: 'editIsbn', value: book.isbn })
            };

            const editor = el('tr', [
                el('td', edit.title),
                el('td', edit.author),
                el('td', edit.isbn),
                el('td', [
                    confirmBtn,
                    cancelBtn,
                ]),
            ]);

            table.replaceChild(editor, element);
        }
    }

    async function deleteBook(id) {
        try {
            await api.deleteBook(id);
            displayBooks();
        } catch (err) {
            alert(err);
            console.error(err);
        }
    }

    async function editBook(book) {
        try {
            await api.updateBook(book);
            displayBooks();
        } catch (err) {
            alert(err);
            console.error(err);
        }
    }
});
