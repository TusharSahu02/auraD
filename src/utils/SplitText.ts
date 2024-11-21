interface SplitTextOptions {
  type?: "chars";
}
export default class SplitText {
  element: HTMLElement;
  type: string;
  chars: HTMLElement[];

  constructor(element: HTMLElement, options: SplitTextOptions = {}) {
    this.element = element;
    this.type = options.type || "chars";
    this.chars = [];
    this.split();
  }

  split() {
    const text = this.element.innerText;
    this.element.innerHTML = "";

    if (this.type === "chars") {
      const chars = text.split("").map((char) => {
        const span = document.createElement("span");
        span.classList.add("char");
        span.innerText = char;
        this.element.appendChild(span);
        return span;
      });
      this.chars = chars;
    }
  }
}
