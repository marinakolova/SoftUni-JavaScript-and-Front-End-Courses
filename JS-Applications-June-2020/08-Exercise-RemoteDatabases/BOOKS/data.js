const appId = ''; // Backendless Application ID
const restApiKey = ''; // Backendless REST API key

function host(endpoint) {
    return `https://eu-api.backendless.com/${appId}/${restApiKey}/data/${endpoint}`;
}

export async function getBooks() {
    const response = await fetch(host('books'));
    const data = await response.json();
    return data;
}

export async function createBook(book) {
    const response = await fetch(host('books'), {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}

export async function updateBook(book) {
    const id = book.objectId;
    const response = await fetch(host('books/' + id), {
        method: 'PUT',
        body: JSON.stringify(book),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}

export async function deleteBook(id) {
    const response = await fetch(host('books/' + id), {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
}
