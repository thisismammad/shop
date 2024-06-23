const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["سفارشات", "ارسالی", "انبار", "فروش"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const container = document.querySelector(".container");
const bar = document.querySelector("#showHideMenu");
const userName = document.querySelector("#userName");
const menu = document.querySelector(".container aside");
const userCircle = document.querySelector("#statusCircle");
const showHideStatus = document.querySelector("#showHideStatus");
const profileImage = document.querySelector("#profileImage");
const statusHolder = document.querySelector(".status");
const itemMenuNames = document.querySelectorAll(".menu-item-name");
const itemMenuIcons = document.querySelectorAll(".menu-item-icon");

// Attach listener function on state changes
window.addEventListener("change", function () {
  if ($(window).width() < 765) {
    menu.style.display = "none";
  } else if ($(window).width() > 764) {
    menu.style.display = "block";
    lessMenu();
  } else if ($(window).width() > 1023) {
    menu.style.display = "block";
    fullMenu();
  }
});

bar.addEventListener("click", () => {
  if ($(window).width() < 765) {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  } else {
    if (menu.style.width === "250px") {
      lessMenu();
    } else {
      fullMenu();
    }
  }
});

function lessMenu() {
  menu.style.width = "120px";
  userName.style.display = "none";
  userCircle.style.display = "none";
  showHideStatus.style.display = "none";
  profileImage.style.width = "80%";
  itemMenuNames.forEach((element) => {
    element.style.display = "none";
  });
  itemMenuIcons.forEach((element) => {
    element.style.fontSize = "2em";
    element.style.margin = "auto";
  });
  showHideStatus.classList.replace("fa-chevron-up", "fa-chevron-down");
  statusHolder.style.display = "none";
}

function fullMenu() {
  menu.style.width = "250px";
  userName.style.display = "block";
  userCircle.style.display = "block";
  showHideStatus.style.display = "block";
  profileImage.style.width = "50%";
  itemMenuNames.forEach((element) => {
    element.style.display = "block";
  });
  itemMenuIcons.forEach((element) => {
    element.style.fontSize = "1.5em";
    element.style.margin = "0";
  });
}

showHideStatus.addEventListener("click", () => {
  if (showHideStatus.classList.contains("fa-chevron-down")) {
    showHideStatus.classList.replace("fa-chevron-down", "fa-chevron-up");
    statusHolder.style.display = "block";
  } else {
    showHideStatus.classList.replace("fa-chevron-up", "fa-chevron-down");
    statusHolder.style.display = "none";
  }
});
