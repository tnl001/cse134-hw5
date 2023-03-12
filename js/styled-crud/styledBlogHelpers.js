/**
 * Helper function to render a blog view
 * @param {*} blogData 
 */
export function renderBlogView(blogData) {
    let deletePrompt = document.getElementById("delete-prompt");
    let editPrompt = document.getElementById("edit-prompt");
    let blogList = document.getElementById("blog-list");
    let blog = document.createElement("section");
    let blogTitle = document.createElement("h2");
    let blogDate = document.createElement("time");
    let blogSummary = document.createElement("p");
    let blogBtnContainer = document.createElement("div");
    let blogDeleteBtn = document.createElement("button");
    let blogEditBtn = document.createElement("button");
    let blogViewBtn = document.createElement("button");

    // Check if empty-list message is active
    if (blogList.querySelector("#empty-list") != null) {
        blogList.removeChild(blogList.querySelector("#empty-list"));
    }

    // Render view
    blog.setAttribute("class", "blog")
    blogTitle.setAttribute("id", "blog-title");
    blogDate.setAttribute("id", "blog-date");
    blogSummary.setAttribute("id", "blog-summary");
    blogTitle.innerText = blogData.postTitle;
    blogDate.innerText = blogData.postDate;
    blogSummary.innerText = blogData.postSummary;

    blogBtnContainer.setAttribute("class", "blogBtnContainer");
    blogDeleteBtn.setAttribute("class", "deleteBtn");
    blogEditBtn.setAttribute("class", "editBtn");
    blogViewBtn.setAttribute("class", "viewBtn");

    blogViewBtn.addEventListener("click", () => {
        // Populate detail view
        let blogToPopulate = blogViewBtn.parentNode.parentNode;
        renderDetailView(blogToPopulate);
    });

    blogDeleteBtn.addEventListener("click", () => {
        deletePrompt.showModal();
        let blogDeleteOK = document.getElementById("delete-ok");
        let blogIndex = Array.from(blogDeleteBtn.parentNode.parentNode.parentNode.children).indexOf(blogDeleteBtn.parentNode.parentNode);
        blogDeleteOK.value = blogIndex;
    });

    blogEditBtn.addEventListener("click", () => {
        editPrompt.showModal();

        let blogEditOK = document.getElementById("edit-ok");
        let blogIndex = Array.from(blogEditBtn.parentNode.parentNode.parentNode.children).indexOf(blogEditBtn.parentNode.parentNode);
        blogEditOK.value = blogIndex;

        // Populate edit form fields
        let blogToPopulate = blogEditBtn.parentNode.parentNode;
        let blogTitleEdit = document.getElementById("post-title-edit");
        let blogDateEdit = document.getElementById("post-date-edit");
        let blogSummaryEdit = document.getElementById("post-sum-edit");

        blogTitleEdit.value = blogToPopulate.querySelector("#blog-title").innerHTML;
        blogDateEdit.value = blogToPopulate.querySelector("#blog-date").innerHTML;
        blogSummaryEdit.value = blogToPopulate.querySelector("#blog-summary").innerHTML;
    })

    blogBtnContainer.appendChild(blogViewBtn);
    blogBtnContainer.appendChild(blogEditBtn);
    blogBtnContainer.appendChild(blogDeleteBtn);


    blog.appendChild(blogTitle);
    blog.appendChild(blogDate);
    blog.appendChild(blogSummary);
    blog.appendChild(blogBtnContainer);

    blogList.appendChild(blog);
}

/**
 * Helper function to remove a blog view
 * @param {*} blogIndex 
 */
export function deleteBlogView(blogIndex) {
    let blogList = document.getElementById("blog-list");
    blogList.removeChild(Array.from(blogList.children)[blogIndex]);
}

/**
 * Helper function to render view after editing
 * @param {*} blogData 
 * @param {*} blogIndex 
 */
export function editBlogView(blogData, blogIndex) {
    let blogList = document.getElementById("blog-list");
    let blogToEdit = Array.from(blogList.children)[blogIndex]
    let blogTitle = blogToEdit.querySelector("#blog-title");
    let blogDate = blogToEdit.querySelector("#blog-date");
    let blogSummary = blogToEdit.querySelector("#blog-summary");

    blogTitle.innerText = blogData.postTitle;
    blogDate.innerText = blogData.postDate;
    blogSummary.innerText = blogData.postSummary;
}

/**
 * Helper function to render message when blog list is empty
 */
export function renderEmptyView() {
    let blogList = document.getElementById("blog-list");
    blogList.innerHTML = "<p id='empty-list'>No blogs currently listed!</p>";
}


export function renderDetailView(blogData) {
    let detailView = document.getElementById("detail-prompt");
    let detailViewTitle = document.getElementById("blog-detail-title");
    let detailViewDate = document.getElementById("blog-detail-date");
    let detailViewSummary = document.getElementById("blog-detail-summary");

    detailViewTitle.innerText = blogData.querySelector("#blog-title").innerHTML;;
    detailViewDate.innerText = blogData.querySelector("#blog-date").innerHTML;;
    detailViewSummary.innerText = blogData.querySelector("#blog-summary").innerHTML;;

    detailView.showModal();
}