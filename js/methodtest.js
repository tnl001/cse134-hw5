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
        displayData(output, res);
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

    return jsonPromise;
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

/**
 * Helper function to display the response data
 * @param {*} data 
 */
function displayData(outputField, data) {
    outputField.innerHTML = "";
    let table = document.createElement("table");
    table.setAttribute("id", "output-data")
    for (let key in data) {
        let row = document.createElement("tr");
        row.innerHTML = `
            <th>${key}</th>
            <td>${JSON.stringify(data[key], null, 5)}</td>
        `;
        table.appendChild(row);
    }

    outputField.appendChild(table);
}