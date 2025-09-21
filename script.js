const postsGrid = document.getElementById("postsGrid");
const darkToggle = document.getElementById("darkToggle");

// Dummy blog posts (could later come from API or Markdown files)
const blogPosts = [
  {
    title: "My Journey into Frontend Development",
    date: "Sept 10, 2025",
    image: "https://source.unsplash.com/400x250/?coding",
    description: "I started learning frontend development through ALX. Here’s what I learned in my first few months..."
  },
  {
    title: "Building My First Portfolio Website",
    date: "Aug 28, 2025",
    image: "https://source.unsplash.com/400x250/?website",
    description: "A deep dive into how I created my personal portfolio using HTML, CSS, and JavaScript..."
  },
  {
    title: "Top 5 Lessons from Learning React",
    date: "July 20, 2025",
    image: "https://source.unsplash.com/400x250/?reactjs",
    description: "React opened my eyes to component-based architecture. Here are my 5 biggest takeaways..."
  }
];

// Render blog posts
function renderPosts() {
  postsGrid.innerHTML = "";
  blogPosts.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("post-card");
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}" />
      <div class="post-content">
        <h3>${post.title}</h3>
        <small>${post.date}</small>
        <p>${post.description}</p>
      </div>
    `;
    postsGrid.appendChild(card);
  });
}

// Dark Mode Toggle
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    darkToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    darkToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Load theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  darkToggle.textContent = "☀️";
}

// Init
renderPosts();
