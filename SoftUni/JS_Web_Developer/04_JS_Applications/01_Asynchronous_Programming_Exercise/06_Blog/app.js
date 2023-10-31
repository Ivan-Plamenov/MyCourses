function attachEvents() {
  document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:3030/jsonstore/blog/";
    const postsEndpoint = `${baseUrl}posts`;
    const commentsEndpoint = `${baseUrl}comments`;

    const btnLoadPosts = document.getElementById("btnLoadPosts");
    const btnViewPost = document.getElementById("btnViewPost");
    const postsDropdown = document.getElementById("posts");
    const postTitle = document.getElementById("post-title");
    const postBody = document.getElementById("post-body");
    const postComments = document.getElementById("post-comments");

    let postsData = null;
    let commentsData = null;

    // Function to make a GET request and handle response
    async function fetchData(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching data from ${url}`);
      }
      return response.json();
    }

    // Function to load and display all posts
    async function loadPosts() {
      try {
        postsData = await fetchData(postsEndpoint);

        postsDropdown.innerHTML = "";
        for (const postId in postsData) {
          const post = postsData[postId];
          const option = document.createElement("option");
          option.value = postId;
          option.textContent = post.title;
          postsDropdown.appendChild(option);
        }
      } catch (error) {
        console.error(error);
      }
    }

    // Function to display selected post and its comments
    function viewPost() {
      const selectedPostId = postsDropdown.value;
      const selectedPost = postsData[selectedPostId];

      if (selectedPost) {
        postTitle.textContent = selectedPost.title;
        postBody.textContent = selectedPost.body;

        postComments.innerHTML = "";

        if (commentsData) {
          const commentsForPost = Object.values(commentsData).filter(
            (comment) => comment.postId === selectedPostId
          );

          commentsForPost.forEach((comment) => {
            const li = document.createElement("li");
            li.textContent = comment.text;
            postComments.appendChild(li);
          });
        }
      }
    }

    // Event listeners for button clicks
    btnLoadPosts.addEventListener("click", loadPosts);
    btnViewPost.addEventListener("click", viewPost);

    // Load initial data
    loadPosts();

    // Fetch comments data separately
    fetchData(commentsEndpoint)
      .then((data) => {
        commentsData = data;
      })
      .catch((error) => {
        console.error("Error fetching comments data:", error);
      });
  });
}

attachEvents();
