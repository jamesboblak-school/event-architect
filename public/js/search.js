var memReqEl = document.getElementById('memReq')
var searchMemEl = document.getElementById('memSearch')
var searchEventEl = document.getElementById('eventSearch')

memReqEl.addEventListener("submit", async () => {
    event.preventDefault();
    postSearchReq(searchMemEl)
})

searchEventEl.addEventListener("submit", async () => {
    event.preventDefault();
    postSearchReq(searchMemEl)
})

    // if (event.target.matches(".submit")) {
    //     const search = e.target.inputEl.value

async function postSearchReq (searchField) {
    const search = searchField.value;

    const response = await fetch(`/api/comment`, {
        
        method: 'POST',
        body: JSON.stringify({search}),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {document.location.reload()}
    else alert('Failed to search')
}


