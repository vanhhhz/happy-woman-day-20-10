onload = () => {
  // Bắt đầu hiệu ứng nở hoa
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Sau khi hoa nở (khoảng 4 giây), hiện tên THÙY DƯƠNG
  const showName = setTimeout(() => {
    const nameEl = document.getElementById("name");
    if (nameEl) {
      nameEl.classList.add("show");
    }
    clearTimeout(showName);
  }, 1500);
};
