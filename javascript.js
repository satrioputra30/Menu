function toggleItem(button) {
  button.classList.toggle("active");
  if (button.classList.contains("active")) {
    button.style.backgroundColor = "#007bff";
    button.style.color = "#fff";
  } else {
    button.style.backgroundColor = "#e0e0e0";
    button.style.color = "#000";
  }
  updateTotal();
}

function updateTotal() {
  let total = 0;
  const activeItems = document.querySelectorAll(".menu-item.active");
  activeItems.forEach((item) => {
    total += parseInt(item.getAttribute("price"));
  });
  document.getElementById("totalPrice").innerText = "Rp " + total.toLocaleString("id-ID");
}
