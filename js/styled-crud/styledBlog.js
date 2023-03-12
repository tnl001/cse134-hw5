import { createBlog, loadBlog, deleteBlog, editBlog } from './styledBlogServices.js'

window.addEventListener("load", init);

function init() {
    let addPrompt = document.getElementById("add-prompt");
    let addForm = document.getElementById("add-form");
    let addBtn = document.getElementById("add-btn");

    let postTitle = document.getElementById("post-title");
    let postDate = document.getElementById("post-date");
    let postSummary = document.getElementById("post-sum");

    loadBlog();

    addBtn.addEventListener("click", () => {
        addPrompt.showModal();
        addForm.reset();
    });

    addPrompt.addEventListener("close", () => {
        let blogData = {
            "postTitle": postTitle.value,
            "postDate": postDate.value,
            "postSummary": postSummary.value
        };

        if (addPrompt.returnValue != "false") {
            createBlog(blogData);
        }
    });

    let deletePrompt = document.getElementById("delete-prompt");
    deletePrompt.addEventListener("close", () => {
        if (deletePrompt.returnValue != "false") {
            deleteBlog(deletePrompt.returnValue);
        }
    });

    let editPrompt = document.getElementById("edit-prompt");
    let postTitleEdit = document.getElementById("post-title-edit");
    let postDateEEdit = document.getElementById("post-date-edit");
    let postSummaryEdit = document.getElementById("post-sum-edit");
    editPrompt.addEventListener("close", () => {
        let blogData = {
            "postTitle": postTitleEdit.value,
            "postDate": postDateEEdit.value,
            "postSummary": postSummaryEdit.value
        };

        if (editPrompt.returnValue != "false") {
            editBlog(blogData, editPrompt.returnValue);
        }
    });
}