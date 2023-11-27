const blogDetails = document.querySelector(".blog-post-details");

function getBlogPost() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

const blogID = getBlogPost();
const blogURL = `https://arvydasmikalauskis.no/wp-json/wc/store/products/${blogID}`;

async function fetchPosts(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    displayBlogPost(result);
  } catch (error) {
    console.log(error);
  }
}

fetchPosts(blogURL);

function displayBlogPost(post) {
  const blogPost = `
        <h2>${post.name}</h2>
        <p>${post.short_description}</p>
        <div class="blog-post-image-container">
            <img class="blog-post-image" src="${post.images[0].src}" alt="${post.name}">
        </div>
        <div class="recipe-description">
            <p>${post.description}</p> 
        </div>


    `;

  blogDetails.innerHTML = blogPost;
}

// Modal image
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

function openModal(imageSrc) {
  modalImage.src = imageSrc;
  modal.showModal();
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("blog-post-image")) {
    openModal(event.target.src);
  }
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
