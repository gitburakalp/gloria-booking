let ww = 0;

$(".fig-image").each(function() {
  let $this = $(this);
  let widths = null;
  let heights = null;

  ww = $(window).width();
  widths = $this.data("sizes-widths").split(",");
  heights = $this.data("sizes-heights").split(",");

  console.log(widths);

  if (widths.length != 0 && heights.length != 0) {
    let ar = 1;

    if (ww < 768) {
      ar = getAR(heights[0], widths[0]);
    } else {
      ar = getAR(heights[1], widths[1]);
    }

    document.documentElement.style.setProperty("--hotel-images-ar", ar);
  }
});

window.addEventListener("load", function() {
  $(".btn--hamburger").on("click", e => {
    e.preventDefault();

    $(".header").toggleClass("is-shown");
  });
});
