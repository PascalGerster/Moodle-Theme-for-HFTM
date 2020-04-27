
chrome.storage.sync.get(['key1'], function (background) {
    console.log('Value Key1 currently is ' + background.key1);
    document.body.style.backgroundColor = background.key1;
});

chrome.storage.sync.get(['key2'], function (color2) {
    console.log('Value Key2 currently is ' + color2.key2);
    var all = document.getElementsByClassName("card-body");
    for (var i = 0; i < all.length; i++) { all[i].style.color = color2.key2; }
    var main = document.getElementsByClassName("region-main-content");
    for (var i = 0; i < main.length; i++) { main[i].style.color = color2.key2; }
    var navi = document.getElementsByClassName("navbar");
    for (var i = 0; i < navi.length; i++) { navi[i].style.color = color2.key2; navi[i].style.opacity = "98%"; }
    var font = document.getElementsByClassName("font-weight-bold");
    for (var i = 0; i < font.length; i++) { font[i].style.color = color2.key2; }
    var section = document.getElementsByClassName("sectionname");
    for (var i = 0; i < section.length; i++) { section[i].style.color = color2.key2; }
    

});

chrome.storage.sync.get(['key3'], function (color3) {
    console.log('Value Key3 currently is ' + color3.key3);
    var all = document.getElementsByClassName("card-body");
    for (var i = 0; i < all.length; i++) { all[i].style.backgroundColor = color3.key3; }
    var main = document.getElementsByClassName("region-main-content");
    for (var i = 0; i < main.length; i++) { main[i].style.backgroundColor = color3.key3; }
    var navi = document.getElementsByClassName("navbar");
    for (var i = 0; i < navi.length; i++) { navi[i].style.backgroundColor = color3.key3; navi[i].style.opacity = "98%"; }
    var border = document.getElementsByClassName("card");
    for (var i = 0; i < border.length; i++) { border[i].style.backgroundColor = color3.key3; }
    var dropdown = document.getElementsByClassName("menu");
    for (var i = 0; i < dropdown.length; i++) { dropdown[i].style.background = color3.key3; dropdown[i].style.opacity = "98%" }
});


document.addEventListener("mousemove", function () {

    chrome.storage.sync.get(['key4'], function (color4) {
        var column = document.getElementsByTagName("a");
        for (var i = 0; i < column.length; i++) { column[i].style.color = color4.key4; }
        var collapse = document.getElementsByTagName("li");
        for (var i = 0; i < collapse.length; i++) { collapse[i].style.color = color4.key4; }
    });

    chrome.storage.sync.get(['key3'], function (color3) {
        var border = document.getElementsByClassName("card");
        for (var i = 0; i < border.length; i++) { border[i].style.backgroundColor = color3.key3; }
        var dropdown = document.getElementsByClassName("menu");
        for (var i = 0; i < dropdown.length; i++) { dropdown[i].style.background = color3.key3; dropdown[i].style.opacity = "90%" }
    });

    chrome.storage.sync.get(['key2'], function (color2) {
        var font = document.getElementsByClassName("font-weight-bold");
        for (var i = 0; i < font.length; i++) { font[i].style.color = color2.key2; }
    });

    chrome.storage.sync.get(['key5'], function (color5) {
        var list = document.getElementsByClassName("list-group-item");
        for (var i = 0; i < list.length; i++) { list[i].style.backgroundColor = color5.key5; }
        var textcenter = document.getElementsByClassName("course-summaryitem");
        for (var i = 0; i < textcenter.length; i++) { textcenter[i].style.backgroundColor = color5.key5; textcenter[i].style.borderRadius = "10px"; }
        var messenger = document.getElementsByClassName("popover-region-container");
        for (var i = 0; i < messenger.length; i++) { messenger[i].style.backgroundColor = color5.key5; messenger[i].style.opacity = "95%"; }
        var messengerfoot = document.getElementsByClassName("popover-region-footer-container");
        for (var i = 0; i < messengerfoot.length; i++) { messengerfoot[i].style.backgroundColor = color5.key5; messengerfoot[i].style.opacity = "95%"; }
        var flex = document.getElementsByClassName("h-100");
        for (var i = 0; i < flex.length; i++) { flex[i].style.backgroundColor = color5.key5; flex[i].style.opacity = "95%"; }
        var px2 = document.getElementsByClassName("px-2 ");
        for (var i = 0; i < px2.length; i++) { px2[i].style.backgroundColor = color5.key5; px2[i].style.opacity = "95%"; }

    });

    var event1 = document.getElementsByClassName("calendar_event_course");
    for (var i = 0; i < event1.length; i++) { event1[i].style.mixBlendMode = "exclusion"; event1[i].style.borderRadius = "30px"; }

});




chrome.storage.sync.get(['key4'], function (color4) {
    console.log('Value Key4 currently is ' + color4.key4);
    var column = document.getElementsByTagName("a");
    for (var i = 0; i < column.length; i++) { column[i].style.color = color4.key4; }
    var collapse = document.getElementsByTagName("li");
    for (var i = 0; i < collapse.length; i++) { collapse[i].style.color = color4.key4; }
    var event1 = document.getElementsByClassName("calendar_event_course");
    for (var i = 0; i < event1.length; i++) { event1[i].style.mixBlendMode = "exclusion"; event1[i].style.borderRadius = "30px"; }
});



chrome.storage.sync.get(['key5'], function (color5) {
    console.log('Value Key5 currently is ' + color5.key5);
    var list = document.getElementsByClassName("list-group-item");
    for (var i = 0; i < list.length; i++) { list[i].style.backgroundColor = color5.key5; }
    var textcenter = document.getElementsByClassName("course-summaryitem");
    for (var i = 0; i < textcenter.length; i++) { textcenter[i].style.backgroundColor = color5.key5; textcenter[i].style.borderRadius = "10px"; }
    var messenger = document.getElementsByClassName("popover-region-container");
    for (var i = 0; i < messenger.length; i++) { messenger[i].style.backgroundColor = color5.key5; messenger[i].style.opacity = "95%"; }
    var messengerfoot = document.getElementsByClassName("popover-region-footer-container");
    for (var i = 0; i < messengerfoot.length; i++) { messengerfoot[i].style.backgroundColor = color5.key5; messengerfoot[i].style.opacity = "95%"; }
    var flex = document.getElementsByClassName("h-100");
    for (var i = 0; i < flex.length; i++) { flex[i].style.backgroundColor = color5.key5; flex[i].style.opacity = "95%"; }
    var px2 = document.getElementsByClassName("px-2 ");
    for (var i = 0; i < px2.length; i++) { px2[i].style.backgroundColor = color5.key5; px2[i].style.opacity = "95%"; }
});



