import './../../css/button.css'
import burgerIcon from "./../../img/burger_icon.svg";

export default { title: 'Button' };

const burgerImageAttributes = {
  src: burgerIcon,
  alt: 'three horizontal lines, stacked on each other with proper spacing between them'
}

const burgerMenuButtonTemplate =
  `
    <button class="btn_icon"><img src=${burgerImageAttributes.src} alt=${burgerImageAttributes.alt} /></button>
  `

export const BurgerMenuButton = () => burgerMenuButtonTemplate;
