const cats = [
  "Lea", "Grisu", "Rocky",
  "Giacomino Guardiano Dell Iperspazio", "Pimpi"
];
const page = document.querySelector(".page");
const template = document.querySelector("template");

cats.forEach(cat => {
  const html = template.content.cloneNode(true);
  html.querySelector("h1").textContent = cat;
  page.append(html);
});

const button = document.querySelector("button");

button.addEventListener("click", (ev) => {
  console.log(ev);
});

const input = document.querySelector("input");

input.addEventListener("keydown", (ev) => {
  console.log(ev);
});

const container = document.querySelector(".container");
const status = document.querySelector(".status");

const update = (ev) => {
  console.log("Target: ", ev.target.className);
  console.log("currentTarget: ", ev.currentTarget.className);
}

container.addEventListener("click", (ev) => update(ev));


const tasks = document.querySelector(".tasks");
tasks.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("delete"))
    ev.target.parentElement.remove();
});
