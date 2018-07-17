const templates = [...document.querySelectorAll(`template`)];
const centralContent = document.querySelector(`main.central`);
const leftArrow = 37;
const rightArrow = 39;
const MAX_INDEX = templates.length;
const MIN_INDEX = 0;
let currentIndex = 0;

const changeScreen = (idx) => {
  const clonedScreen = templates[idx].content.cloneNode(true);
  centralContent.innerHTML = ``;
  centralContent.appendChild(clonedScreen);
};

const changeTemplate = (idx) => {
  if (idx >= MIN_INDEX && idx < MAX_INDEX) {
    changeScreen(idx);
    currentIndex = idx;
  }
};

changeScreen(currentIndex);

const arrowButtons = document.createElement(`DIV`);
arrowButtons.className = `arrows__wrap`;
arrowButtons.innerHTML = `<style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn" onclick="changeTemplate(currentIndex - 1)"></button>
    <button class="arrows__btn" onclick="changeTemplate(currentIndex + 1)"></button>`;

document.body.appendChild(arrowButtons);

document.addEventListener(`keydown`, function (evt) {
  if (evt.ctrlKey) {
    return;
  } else if (evt.keyCode === leftArrow) {
    changeTemplate(currentIndex - 1);
  } else if (evt.keyCode === rightArrow) {
    changeTemplate(currentIndex + 1);
  }
});
