window.addEventListener("load", init);

function init() {
    let postBtn = document.getElementById("post");
    let getBtn = document.getElementById("get");
    let putBtn = document.getElementById("put");
    let deleteBtn = document.getElementById("delete");

    let output = document.getElementById("response");

    postBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        let data = collectData();
        let res = await methodPOST(data);
        console.log(res);
        output.innerHTML = `
        <table style="text-align: left;">
            <tr>
                <th>ID<th>
                <td>${res.id}</td>
            </tr>
            <tr>
                <th>Article Name<th>
                <td>${res.article_name}</td>
            </tr>
            <tr>
                <th>Article Body<th>
                <td>${res.article_body}</td>
            </tr>
            <tr>
                <th>Date<th>
                <td>${res.date}</td>
            </tr>
        </table>
        `;
    });
}

async function methodPOST(data) {
    let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    });

    if (!res.ok) {
        console.log(res.status);
    }

    let jsonPromise = await res.json();

    return jsonPromise.json;
}

/**
 * Helper function to collect data from form
 * @returns JSON data object
 */
function collectData() {
    let articleID = document.getElementById("id");
    let articleName = document.getElementById("article_name");
    let articleBody = document.getElementById("article_body");
    let articleDate = new Date().toISOString();

    let data = JSON.stringify({
        "id": articleID.value,
        "article_name": articleName.value,
        "article_body": articleBody.value,
        "date": articleDate
    });

    return data;
}