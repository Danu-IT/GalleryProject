import("./styles/style.scss");
import items from "./store/items.js";
import {createComponent, addCard} from './createComponent'

const mainContainer = document.querySelector(".gallery__container");

function buildCard() {
  const galleryCardsContainer = document.createElement("div");
  createComponent(galleryCardsContainer, "gallery__cardsContainer", mainContainer);

  items.forEach((item) => {
    const galleryCards = document.createElement("div");
    createComponent(galleryCards, "gallery__card", galleryCardsContainer);
    addCard(galleryCards, item);
  });
}

buildCard();
