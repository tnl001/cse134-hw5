window.addEventListener("load", init);

function init() {
    let postBtn = document.getElementById("post");
    let getBtn = document.getElementById("get");
    let putBtn = document.getElementById("put");
    let deleteBtn = document.getElementById("delete");
    let output = document.getElementById("response");
    let articleDate = document.getElementById("date");
    let date = new Date().toISOString();
    articleDate.value = date.substring(0, 10);


    postBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        let data = collectData();
        let res = await methodPOST(data);
        displayData(output, res);
    });

    getBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        let data = collectData();
        console.log(data)
        let res = await methodGET(data);
        displayData(output, res);
    });

    putBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        let data = collectData();
        let res = await methodPUT(data);
        displayData(output, res)
    });

    deleteBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        let data = collectData();
        let res = await methodDELETE(data);
        displayData(output, res)
    });
}

/**
 * POST Request
 * @param {*} data 
 * @returns Data promise
 */
async function methodPOST(data) {
    let requestString = "https://httpbin.org/post";
    let res = await fetch(requestString, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        console.log(res.status);
    }

    let jsonPromise = await res.json();

    return jsonPromise;
}

/**
 * GET Request
 * @param {*} data 
 * @returns Data promise
 */
async function methodGET(data) {
    let requestString = `https://httpbin.org/get?id=${data.id}&article_name=${data.article_name}&article_body=${data.article_body}&date=${data.date}`;
    let res = await fetch(requestString, {
        method: "GET"
    });

    if (!res.ok) {
        console.log(res.status);
    }

    let jsonPromise = await res.json();

    return jsonPromise;
}

/**
 * PUT Request
 * @param {*} data 
 * @returns Data promise
 */
async function methodPUT(data) {
    let requestString = "https://httpbin.org/put";
    let res = await fetch(requestString, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        console.log(res.status);
    }

    let jsonPromise = await res.json();

    return jsonPromise;
}

/**
 * DELETE Request
 * @param {*} data 
 * @returns Data promise
 */
async function methodDELETE(data) {
    let requestString = `https://httpbin.org/delete?id=${data.id}&article_name=${data.article_name}&article_body=${data.article_body}&date=${data.date}`;
    let res = await fetch(requestString, {
        method: "DELETE"
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
    let articleDate = document.getElementById("date");


    let data = {
        "id": articleID.value,
        "article_name": articleName.value,
        "article_body": articleBody.value,
        "date": articleDate.value
    };

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