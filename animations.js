let elements = document.querySelector("#animation");

anime({
  targets: elements,
  translateX: 250,
  rotate: "1turn",
  //   backgroundColor: ["#3471eb", "#bd34eb"],
  duration: 3000
});
