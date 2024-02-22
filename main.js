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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bhCMqsacIBcdolD0e7hgxJBtX5_DmgR0xg&usqp=CAU",
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
