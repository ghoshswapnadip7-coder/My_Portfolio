/* Cursor */
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});



/* Scroll reveal */
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* GitHub projects */
fetch("https://api.github.com/users/ghoshswapnadip7-coder/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects-container");
    data.slice(0, 6).forEach(repo => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description"}</p>
        <a href="${repo.html_url}" target="_blank">View</a>
      `;
      container.appendChild(div);
    });
  });
