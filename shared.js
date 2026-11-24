/* Shared page furniture for the Firmware Security Toolkit sales site.
   Both pages load this file, and the header and footer markup lives
   here and nowhere else, so a change in one place updates both pages.
   Each page marks which navigation it needs with a data-page value
   on its body element, and carries two empty slots this file fills:
   one for the header, one for the footer. Loaded with defer, so the
   document is parsed before this runs. */
(function () {
    var navByPage = {
        index: [
            ["#what-it-does", "What it does"],
            ["#who-its-for", "Who it's for"],
            ["#sample-report", "Sample report"],
            ["#buy", "Buy — $129"]
        ],
        download: [
            ["index.html", "Sales page"]
        ]
    };

    function headerMarkup(page) {
        var links = navByPage[page] || navByPage.index;
        var nav = "";
        var i;
        for (i = 0; i < links.length; i++) {
            nav += '\n      <a href="' + links[i][0] + '">' +
                links[i][1] + "</a>";
        }
        return '<header class="site-header">\n  <div class="wrap">\n' +
            '    <a class="brand" href="index.html">Firmware Security ' +
            "<span>Toolkit</span></a>\n" +
            '    <nav class="site-nav">' + nav + "\n    </nav>\n" +
            "  </div>\n</header>";
    }

    var footerMarkup = '<footer class="site-footer">\n  <div class="wrap">\n' +
        "    <p>Firmware Security Toolkit, version 1.0.0. Built by " +
        "James Marcus Anderson, Houston, TX.</p>\n" +
        '    <p>Questions or support: <a href="mailto:' +
        "jamesmarcusanderson@protonmail.com\">" +
        "jamesmarcusanderson@protonmail.com</a></p>\n" +
        "    <p>&copy; 2026 James Marcus Anderson. " +
        "All rights reserved.</p>\n" +
        "  </div>\n</footer>";

    function fillSlot(id, markup) {
        var slot = document.getElementById(id);
        if (slot) {
            slot.outerHTML = markup;
        }
    }

    fillSlot("site-header",
        headerMarkup(document.body.getAttribute("data-page")));
    fillSlot("site-footer", footerMarkup);
})();
