{
  // const windowX = window.innerWidth;
  const wrap = document.querySelector(".index__head");
  // wrap.style.width = windowX + `px`;
  const beforeContents = document.querySelectorAll(".index__head--list");
  // ----------------------- スライドを複製
  // スライドショーひとつめ
  const first = document.querySelector(".index__head--list:first-child");
  // スライドショー最後
  let last = document.querySelector(".index__head--list:last-child");
  // ひとつめをコピー
  const copy = first.cloneNode(true);
  // ラストにコピー版を複製
  last.after(copy);
  // ----------------------- 複製完了
  // 最初のスライド(三枚)
  const contents = document.querySelectorAll(".index__head--list");
  const w = contents[0].clientWidth;
  let count = 1;
  let flag = true;

  let reset = () => {
    wrap.removeEventListener("transitionend", reset);
    wrap.style.transition = "none";
    wrap.style.transform = "translateX(0)";
    timer();
  };

  let timer = () => {
    setTimeout(() => {
      wrap.removeEventListener("transitionend", timer);
      slider();
    }, 2000);
  };

  let slider = () => {
    if (flag) {
      console.log(flag);
      wrap.style.transform = `translateX(-` + w + `px)`;
      wrap.style.transition = "0.5s ease-in-out";

      flag = false;
      count++;
    } else {
      if (count == contents.length) {
        console.log(count);
        wrap.style.transition = "none";
        wrap.style.transform = "translateX(0)";

        count = 1;
      } else {
        console.log("comp");
        wrap.style.transform = `translateX(-` + w * count + `px)`;
        wrap.style.transition = "0.5s ease-in-out";
        count++;

        if (count == contents.length) {
          wrap.addEventListener("transitionend", reset);
        }
      }
    }

    wrap.addEventListener("transitionend", timer);
  };
  // slider();
  setTimeout(slider,2000);
}