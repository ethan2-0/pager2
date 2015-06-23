function Pager(pageName) {
    if(Pager.initialized !== true) {
        console.log("Pager", "Generating page cache");
        Pager.pageCache = {};
        Pager.pageKeys = [];
        var pages = document.getElementsByClassName("page");
        for(var i = 0; i < pages.length; i++) {
            var page = pages[i];
            Pager.pageCache[page.getAttribute("page")] = page;
            Pager.pageKeys.push(page.getAttribute("page"));
        }
        Pager.initialized = true;
    }
    var foundIt = false;
    for(var i = 0; i < Pager.pageKeys.length; i++) {
        var key = Pager.pageKeys[i];
        var page = Pager.pageCache[key];
        if(key == pageName) {
            foundIt = true;
            if(typeof page.oldDisplay === "undefined") {
                // Do nothing, since this is the first time through; but, cache it.
                page.oldDisplay = page.style.display;
            } else {
                page.style.display = page.oldDisplay;
            }
        } else {
            if(page.style.display !== "none") {
                page.oldDisplay = page.style.display;
            }
            page.style.display = "none";
        }
    }
    if(!foundIt) {
        console.warn("Requested to load nonexistant page '" + pageName + "'.");
    }
}
// When pager is first called, it needs to regenerate the page cache.
Pager.initialized = false;
Pager.regenerateCache = function() {
    // Next time Pager is called, it will regenerate the page cache.
    Pager.initialized = false;
}