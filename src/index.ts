import showPage from "./utils/ShowPage";


showPage(window.location.pathname);


window.addEventListener('hashchange', function() {
    showPage(window.location.pathname);
});
