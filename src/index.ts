import showPage from "./utils/ShowPage";

showPage(window.location.pathname);

window.addEventListener('hashchange', function() {
    console.log("window.location.pathname")
    console.log(window.location.pathname)
    showPage(window.location.pathname);
});
