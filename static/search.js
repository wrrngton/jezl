const searchBox = document.querySelector("#search");
const items = document.querySelectorAll("li");
const results = document.querySelector(".blog-posts");

const documents = Array.from(items).map((item) => {
  return {
    id: item.id,
    title: item.innerText.replaceAll("\n", "").trim().toLowerCase(),
    innerHtml: item.innerHTML,
  };
});

searchBox.addEventListener("input", (e) => {
  q = e.target.value.toLowerCase();

  const matchingItems = documents.filter((doc) => doc.title.includes(q));

  if (matchingItems.length === 0)
    return (results.innerHTML = "<span>No results, sorry!</span>");

  const html = matchingItems
    .map((match) => `<li id="${match.id}">${match.innerHtml}</li>`)
    .join("");

  results.innerHTML = "";

  results.insertAdjacentHTML("afterbegin", html);
});

document.addEventListener("keypress", (e) => {
  if (e.key === "k" && e.ctrlKey) {
    searchBox.focus();
  }
});
