window.addEventListener("install", (event) => {
  console.log("ServiceWorker install:", event);
});
window.addEventListener("activate", (event) => {
  console.log("ServiceWorker activate:", event);
});
