function changeUrlToCategory(sub) {
    // var site = "/public_html/sub_html/";
    var fullSite = sub + "Main.html";
    document.getElementById('detailPage').src = fullSite;
}

function changeUrlTo(sub, name) {
    var site = "/public_html/sub_html/";
    // var fullSite = site + sub + "/" + name + ".html";
    var fullSite = name + '/' + name + ".html";
    document.getElementById('detailPage').src = fullSite;
}