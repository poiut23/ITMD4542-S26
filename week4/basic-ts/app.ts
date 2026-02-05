let x: string = "hello";
let y = "world";

if (true) {
  let y = 42;
}

console.log(x, y);

const newEl = document.createElement("div");
newEl.classList.add("my-class");
document.body.appendChild(newEl);

const element = document.querySelector<HTMLElement>("div.my-class")!;
