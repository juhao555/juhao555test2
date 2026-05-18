const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxTitle = document.querySelector(".lightbox-title");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxLinks = document.querySelectorAll(".lightbox-link");
const revealItems = document.querySelectorAll(".reveal");
const textRevealItems = document.querySelectorAll(".text-reveal");

const openLightbox = (link) => {
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

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
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
