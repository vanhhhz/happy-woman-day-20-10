onload = () => {
  const title = document.querySelector(".happy-woman-day");
  const body  = document.body;

  // 1) Cho dòng "Happy..." xuất hiện dần, trong khi mọi animation khác vẫn PAUSE (not-loaded)
  const START_TITLE_DELAY = 100;    // chờ 0.1s cho chắc DOM sẵn sàng
  setTimeout(() => {
    title?.classList.add("show");
  }, START_TITLE_DELAY);

  // 2) Khi fade-in xong -> mới cho hoa mọc (bỏ not-loaded)
  const FLOWER_START_FALLBACK = 2200;  // fallback nếu sự kiện transitionend không bắt được
  const startFlowers = () => {
    // chỉ chạy 1 lần
    if (!body.classList.contains("not-loaded")) return;

    body.classList.remove("not-loaded"); // -> tất cả animation hoa bắt đầu

    // 3) (tuỳ chọn) Hiện tên sau khi hoa nở xong
    //    Nếu bạn muốn tên xuất hiện sau ~6.5s kể từ khi hoa bắt đầu:
    const SHOW_NAME_AFTER = 6250;
    setTimeout(() => {
      const nameEl = document.getElementById("name");
      if (nameEl && !nameEl.classList.contains("show")) {
        nameEl.classList.add("show");
      }
    }, SHOW_NAME_AFTER);
  };

  // Ưu tiên bắt sự kiện kết thúc transition opacity của tiêu đề
  const onEnd = (e) => {
    if (e.propertyName === "opacity") {
      title?.removeEventListener("transitionend", onEnd);
      startFlowers();
    }
  };
  title?.addEventListener("transitionend", onEnd);

  // Fallback đề phòng transitionend không bắn (trình duyệt lạ/DOM sửa)
  setTimeout(startFlowers, FLOWER_START_FALLBACK);
};
