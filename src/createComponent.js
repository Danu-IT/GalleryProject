export function addCard(container, object) {
  const cardTitle = document.createElement("h3");
  const cardImage = document.createElement("img");
  const cardAudio = document.createElement("audio");
  const cardVideo = document.createElement("video");

  cardTitle.innerHTML = object.title;
  createComponent(cardTitle, "gallery__cardTitle", container);

  switch (object.type) {
    case "image":
      cardImage.src = object.urlImage;
      createComponent(cardImage, "gallery__cardImage", container);
      break;
    case "audio":
      cardAudio.src = object.urlAudio;
      cardAudio.controls = true;
      createComponent(cardAudio, "gallery__cardImage", container);
      break;
    case "video":
      cardVideo.src = object.urlVideo;
      cardVideo.controls = true;
      createComponent(cardVideo, "gallery__cardImage", container);
      break;
  }
}

export function createComponent(component, style, parent) {
  component.classList.add(style);
  parent.appendChild(component);
}
