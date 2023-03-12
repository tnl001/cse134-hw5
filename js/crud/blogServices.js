import { deleteBlogView, editBlogView, renderBlogView, renderEmptyView } from "./blogHelpers.js"

let storage = window.localStorage;
let buffer = [
    {
        "postTitle": "Blog 1",
        "postDate": "2023-02-04",
        "postSummary": "This is my first blog. I will be creating more blogs!"
    },
    {
        "postTitle": "Blog 2",
        "postDate": "2023-02-23",
        "postSummary": "This is my second blog. More blogs coming soon!"
    }
];
if (storage.getItem("blogs") == null) {
    storage.setItem("blogs", JSON.stringify(buffer));
}
buffer = JSON.parse(storage.getItem("blogs"));

export function createBlog(blogData) {
    buffer.push(blogData);
    storage.setItem("blogs", JSON.stringify(buffer));
    renderBlogView(blogData);
}

export function loadBlog() {
    if (buffer.length == 0) {
        renderEmptyView();
    } else {
        buffer.forEach(blogData => {
            renderBlogView(blogData);
        });
    }
}

export function deleteBlog(blogIndex) {
    buffer.splice(blogIndex, 1);
    storage.setItem("blogs", JSON.stringify(buffer));
    deleteBlogView(blogIndex);
    if (buffer.length == 0) {
        renderEmptyView();
    }
}

export function editBlog(blogData, blogIndex) {
    buffer[blogIndex] = blogData;
    storage.setItem("blogs", JSON.stringify(buffer));
    editBlogView(blogData, blogIndex);
}