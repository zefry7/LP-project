import $ from "../../../vendor/jquery";
import {$window} from "../../dom";


const $header = $(".header");

export function anchorSmoothScroll() {
  $(document).on('click', 'a', function (event) {
    const $item = $($.attr(this, 'href').replace("/", ""));
    if (!$item.length) return;
    event.preventDefault();
    moveToElement($item);
  });
}

function moveToElement($element) {
  if (!$element.length) return;
  $(getScrollingElement()).stop().animate({
    scrollTop: $element.offset().top - $header.height()
  }, 500);
}

function getScrollingElement() {
  return document.scrollingElement || document.documentElement;
}


anchorSmoothScroll();

$window.on("preloader:hide", () => {
  if (location.hash)
    setTimeout(() => moveToElement($(location.hash)), 0)
});
