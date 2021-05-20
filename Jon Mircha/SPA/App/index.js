import api from "../App/Helpers/wp_api.js";
import { App } from "../App/App.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", () => {
  api.page = 1;
  App();
});
