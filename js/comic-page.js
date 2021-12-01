{
  const windowHeight = window.innerHeight;
  const mainWrap = document.querySelector(".comic-page__main");
  const headerWrap = document.querySelector(".comic-page__header");
  const navWrap = document.querySelector(".comic-page__nav");
	const numWrap = document.querySelector(".comic-page__main--num");
  window.addEventListener("load", () => {
    let height = windowHeight - headerWrap.clientHeight - navWrap.clientHeight;
    mainWrap.style.height = height + `px`;
  });

	back(".comic-page__header--back");

  let count = 0;
  mainWrap.addEventListener("click", () => {
    if (count % 2 !== 0) {
			headerWrap.style.transition = "0.1s opacity";
			navWrap.style.transition = "0.1s opacity";
			numWrap.style.transition = "0.1s opacity";
			headerWrap.classList.remove("comic-page__main--display");
			navWrap.classList.remove("comic-page__main--display");
			numWrap.classList.remove("comic-page__main--display");
    }else{
			headerWrap.classList.add("comic-page__main--display");
			navWrap.classList.add("comic-page__main--display");
			numWrap.classList.add("comic-page__main--display");
		}
		count++;
  });
}
