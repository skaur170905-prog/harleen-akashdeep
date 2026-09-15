const envelope = document.getElementById("envelope");
const seal = document.getElementById("seal");
const opening = document.getElementById("opening");
const invitation = document.getElementById("invitation");
const closeBtn = document.getElementById("closeBtn");
const tapNote = document.getElementById("tapNote");

let opened = false;

function openInvitation() {
  if (opened) return;
  opened = true;

  envelope.classList.add("open");
  tapNote.textContent = "Opening your invitation…";

  setTimeout(() => {
    opening.classList.add("hidden");
    invitation.classList.add("show");
    invitation.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }, 850);
}

function closeInvitation() {
  invitation.classList.remove("show");
  invitation.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  setTimeout(() => {
    opening.classList.remove("hidden");
    envelope.classList.remove("open");
    tapNote.textContent = "Tap the seal to open";
    opened = false;
  }, 450);
}

seal.addEventListener("click", (event) => {
  event.stopPropagation();
  openInvitation();
});

envelope.addEventListener("click", openInvitation);

envelope.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openInvitation();
  }
});

closeBtn.addEventListener("click", closeInvitation);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && opened) closeInvitation();
});
