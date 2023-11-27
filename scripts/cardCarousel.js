const apiUrl = "https://arvydasmikalauskis.no/wp-json/wc/store/products/";
const latestPostsContainer = document.getElementById("latest-posts");

async function getData(url, page = 1) {
  const response = await fetch(`${url}?per_page=12&page=${page}`);
  const result = await response.json();
  displayLatestPosts(result);
  updateCarousel();
  console.log(result);
}

getData(apiUrl);

function displayLatestPosts(latestPosts) {
  latestPosts.forEach((latestPost) => {
    latestPostsContainer.innerHTML += `
    <li class="latest-post">
            <img src="${latestPost.images[0].src}" alt="Image" />
            <p>${latestPost.short_description}
                <a href="blogPostPage.html?id=${latestPost.id}" id="read-latest-postBTN">Read Article</a>
            </p>
          </li>
        `;
  });
}

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const latestPosts = document.getElementById("latest-posts");

const postsPerPage = 4;
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= postsPerPage;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex + postsPerPage < latestPosts.children.length) {
    currentIndex += postsPerPage;
    updateCarousel();
  }
});

function updateCarousel() {
  const posts = latestPosts.children;
  for (let i = 0; i < posts.length; i++) {
    if (i >= currentIndex && i < currentIndex + postsPerPage) {
      posts[i].style.display = "block";
    } else {
      posts[i].style.display = "none";
    }
  }
}
