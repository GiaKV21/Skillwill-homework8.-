console.log("[browser] script loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("[browser] DOMContentLoaded");

  const container = document.getElementById("posts");
  if (!container) {
    console.error("No #posts element found");
    return;
  }

  container.textContent = "Loading posts…";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log("[fetch] status =", res.status);
      if (!res.ok) throw new Error("Network error: " + res.status);
      return res.json();
    })
    .then((posts) => {
      console.log("[fetch] posts length =", posts.length);

      container.innerHTML = ""; // clear "Loading…"
      posts.slice(0, 12).forEach((post) => {
        const card = document.createElement("article");
        card.className = "post";
        card.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Error fetching posts:", err);
      container.innerHTML = `<p style="color:red;">Failed to load posts: ${err.message}</p>`;
    });
});
