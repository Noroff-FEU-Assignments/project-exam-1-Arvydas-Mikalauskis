const apiUrl = "https://arvydasmikalauskis.no/wp-json/wc/store/products/";
const blogPostsContainer = document.querySelector(".blog-posts-container");
const latestPosts = document.getElementById("latest-posts");
let currentPage = 1;

async function getData(url, page = 1) {
  const response = await fetch(`${url}?per_page=10&page=${page}`);
  const result = await response.json();
  displayPosts(result);
  console.log(result);
}

getData(apiUrl);

function displayPosts(posts) {
  posts.forEach((post) => {
    blogPostsContainer.innerHTML += `
    <div class="blog-posts-content">
      <img class="blog-posts-images" src="${post.images[0].src}" alt="${post.name}"> 
      <div class="blogPosts-text">
        <h2>${post.name}</h2>
        <p>${post.short_description}</p> 
        <a href="blogPostPage.html?id=${post.id}" class="read-article-btn">Read article</a>   
      </div>
    </div>
    `;
  });
}

const loadMoreBtnContainer = document.createElement("div");
loadMoreBtnContainer.classList.add("load-more-btn-container");

const totalPosts = 20;

const loadMoreButton = document.createElement("button");
loadMoreButton.innerText = "Load More";
loadMoreButton.classList.add("load-more-btn");
loadMoreButton.onclick = async function () {
  currentPage++;
  await getData(apiUrl, currentPage);

  if (currentPage * 10 >= totalPosts) {
    loadMoreBtnContainer.style.display = "none";
  }
};

loadMoreBtnContainer.appendChild(loadMoreButton);
document.body.appendChild(loadMoreBtnContainer);
