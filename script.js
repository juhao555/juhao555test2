const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxTitle = document.querySelector(".lightbox-title");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxLinks = document.querySelectorAll(".lightbox-link");
const revealItems = document.querySelectorAll(".reveal");
const textRevealItems = document.querySelectorAll(".text-reveal");
const timeNote = document.querySelector("#timeNote");

const setTimeMood = () => {
  const hour = new Date().getHours();
  const moods = [
    {
      name: "morning",
      active: hour >= 5 && hour < 11,
      text: "早上的风很轻，适合把新的脑洞记下来。"
    },
    {
      name: "afternoon",
      active: hour >= 11 && hour < 17,
      text: "午后的光刚好，适合继续整理维克与光。"
    },
    {
      name: "evening",
      active: hour >= 17 && hour < 20,
      text: "傍晚像一段过场动画，故事也在慢慢换色。"
    },
    {
      name: "night",
      active: hour >= 20 || hour < 5,
      text: "月亮出来了，天台的故事也慢慢亮起来。"
    }
  ];
  const mood = moods.find((item) => item.active) || moods[1];

  document.body.classList.add(`time-${mood.name}`);
  if (timeNote) {
    timeNote.textContent = mood.text;
  }
};

setTimeMood();

const openLightbox = (link) => {
  if (!lightbox || !lightboxImage || !lightboxTitle) {
    return;
  }

  const image = link.getAttribute("href");
  const title = link.dataset.title || "创作图片";

  lightboxImage.src = image;
  lightboxImage.alt = title;
  lightboxTitle.textContent = title;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  lightboxImage.src = "";
};

lightboxLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openLightbox(link);
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});

const revealTargets = [...revealItems, ...textRevealItems];

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealTargets.forEach((item) => revealObserver.observe(item));
} else {
  revealTargets.forEach((item) => item.classList.add("is-visible"));
}
