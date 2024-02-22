document.addEventListener("DOMContentLoaded", function () {
  const colors = ["burgundy", "grey", "peach", "pink"];
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "https://i.etsystatic.com/9027267/r/il/7e9b07/3763045431/il_fullxfull.3763045431_t3gy.jpg",
  ];
  let index = 0;

  document.addEventListener("mousemove", () => {
    index = (index + 1) % colors.length;
    document.body.style.backgroundColor = colors[index];

    const imgElements = document.querySelectorAll("img");
    imgElements.forEach((img, i) => {
      img.src = images[(index + i) % images.length];
    });
  });
});
