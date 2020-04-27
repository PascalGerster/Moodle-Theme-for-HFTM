window.addEventListener("load", function () {

  if (!localStorage.getItem('bgcolor')) {
    document.write('<html style="height:410px;">'
      + '<div>'
      + '<h1>Hintergrundfarbe</h1>'
      + '<input type="color" id="backgroundColor" value="#FFFFFF" style="width:30%;">'
      + '</div>'
      + '<div>'
      + '<h1>Schriftfarbe 1</h1>'
      + ' <input type="color" id="fontColor1" value="#000000" style="width:30%;">'
      + '</div>'
      + '<div>'
      + '<h1>Elementfarbe</h1>'
      + '<input type="color" id="elementColor" value="#FFFFFF" style="width:30%;">'
      + '</div>'
      + '<div>'
      + '<h1>Schriftfarbe 2</h1>'
      + '<input type="color" id="fontColor2" value="#000000" style="width:30%;">'
      + '</div>'
      + '<h1>Sonstiges</h1>'
      + '<input type="color" id="sonstiges" value="#002233" style="width:30%;">'
      + '</div>'
      + '<div style="display:block; margin-top:40px;">'
      + 'Entwickler: '
      + '<a href="https://chrome.google.com/webstore/detail/moodle-theme/ikmpideofmfgbdgjbepjcbajhalbbdja" target="blank">Pascal Gerster</a>'
      + '</div>'
      + '</html>'
    );
  }
  else {

    setStyles();

    function setStyles() {

      var currentColor = localStorage.getItem('bgcolor');
      var currentFont = localStorage.getItem('font');
      var currentImage = localStorage.getItem('image');
      var currentfont2 = localStorage.getItem('font2');
      var currentsonstiges = localStorage.getItem('sonstiges');

      document.write('<html style="height:410px;">'
        + '<div>'
        + '<h1>Hintergrundfarbe</h1>'
        + '<input type="color" id="backgroundColor" value="' + currentColor + '" style="width:30%;">'
        + '</div>'
        + '<div>'
        + '<h1>Schriftfarbe 1</h1>'
        + ' <input type="color" id="fontColor1" value="' + currentFont + '" style="width:30%;">'
        + '</div>'
        + '<div>'
        + '<h1>Elementfarbe</h1>'
        + '<input type="color" id="elementColor" value="' + currentImage + '" style="width:30%;">'
        + '</div>'
        + '<div>'
        + '<h1>Schriftfarbe 2</h1>'
        + '<input type="color" id="fontColor2" value="' + currentfont2 + '" style="width:30%;">'
        + '</div>'
        + '<h1>Sonstiges</h1>'
        + '<input type="color" id="sonstiges" value="' + currentsonstiges + '" style="width:30%;">'
        + '</div>'
        + '<div style="display:block; margin-top:40px;">'
        + 'Entwickler: '
        + '<a href="https://chrome.google.com/webstore/detail/moodle-theme/ikmpideofmfgbdgjbepjcbajhalbbdja" target="blank">Pascal Gerster</a>'
        + '</div>'
        + '</html>'
      );
    };
  }


  window.addEventListener("input", function () {
    localStorage.clear();

    bc = document.getElementById("backgroundColor").value;
    fc1 = document.getElementById("fontColor1").value;
    ec = document.getElementById("elementColor").value;
    fc2 = document.getElementById("fontColor2").value;
    sc = document.getElementById("sonstiges").value;


    if (!localStorage.getItem('bgcolor')) {

      populateStorage();

      function populateStorage() {
        localStorage.setItem('bgcolor', bc);
        localStorage.setItem('font', fc1);
        localStorage.setItem('image', ec);
        localStorage.setItem('font2', fc2);
        localStorage.setItem('sonstiges', sc);
      }
    }


    chrome.storage.sync.set({ key1: bc }, function () {
      console.log('Saved ' + bc);
    });
    chrome.storage.sync.set({ key2: fc1 }, function () {
      console.log('Saved ' + fc1);
    });
    chrome.storage.sync.set({ key3: ec }, function () {
      console.log('Saved ' + ec);
    });
    chrome.storage.sync.set({ key4: fc2 }, function () {
      console.log('Saved ' + fc2);
    });
    chrome.storage.sync.set({ key5: sc }, function () {
      console.log('Saved ' + sc);
    });

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          code: 'var all = document.getElementsByClassName("card-body");'
            + 'for (var i = 0; i < all.length; i++) { all[i].style.backgroundColor = "' + ec + '"; }'
            + 'var main = document.getElementsByClassName("region-main-content");'
            + 'for (var i = 0; i < main.length; i++) { main[i].style.backgroundColor = "' + ec + '"; }'
            + 'var navi = document.getElementsByClassName("navbar");'
            + 'for (var i = 0; i < navi.length; i++) { navi[i].style.backgroundColor = "' + ec + '";  }'
            + 'var border = document.getElementsByClassName("card");'
            + 'for (var i = 0; i < border.length; i++) { border[i].style.backgroundColor = "' + ec + '"; }'
            + 'var dropdown = document.getElementsByClassName("menu");'
            + 'for (var i = 0; i < dropdown.length; i++) { dropdown[i].style.background = "' + ec + '"; dropdown[i].style.opacity = "98%" }'
            + 'document.body.style.backgroundColor ="' + bc + '";'
            + 'var all = document.getElementsByClassName("card-body");'
            + 'for (var i = 0; i < all.length; i++) {  all[i].style.color = "' + fc1 + '"; }'
            + 'var main = document.getElementsByClassName("region-main-content");'
            + 'for (var i = 0; i < main.length; i++) { main[i].style.color = "' + fc1 + '"; }'
            + 'var navi = document.getElementsByClassName("navbar");'
            + 'for (var i = 0; i < navi.length; i++) { navi[i].style.color = "' + fc1 + '"; navi[i].style.opacity = "98%"; }'
            + 'var font = document.getElementsByClassName("font-weight-bold");'
            + 'for (var i = 0; i < font.length; i++) { font[i].style.color = "' + fc1 + '"; }'
            +'var section = document.getElementsByClassName("sectionname");'
            +'for (var i = 0; i < section.length; i++) { section[i].style.color = "' + fc1 + '"; }'
            + 'var column = document.getElementsByTagName("a");'
            + 'for (var i = 0; i < column.length; i++) { column[i].style.color = "' + fc2 + '"; }'
            + 'var collapse = document.getElementsByTagName("li");'
            + 'for (var i = 0; i < collapse.length; i++) { collapse[i].style.color = "' + fc2 + '"; }'
            + 'var list = document.getElementsByClassName("list-group-item");'
            + 'for (var i = 0; i < list.length; i++) { list[i].style.backgroundColor ="' + sc + '"; }'
            + 'var textcenter = document.getElementsByClassName("course-summaryitem");'
            + 'for (var i = 0; i < textcenter.length; i++) { textcenter[i].style.backgroundColor = "' + sc + '"; textcenter[i].style.borderRadius = "10px"; }'
            + 'var messenger = document.getElementsByClassName("popover-region-container");'
            + 'for (var i = 0; i < messenger.length; i++) { messenger[i].style.backgroundColor = "' + sc + '"; messenger[i].style.opacity = "95%"; }'
            + 'var messengerfoot = document.getElementsByClassName("popover-region-footer-container");'
            + 'for (var i = 0; i < messengerfoot.length; i++) { messengerfoot[i].style.backgroundColor = "' + sc + '"; messengerfoot[i].style.opacity = "95%"; }'
            + 'var flex = document.getElementsByClassName("h-100");'
            + 'for (var i = 0; i < flex.length; i++) { flex[i].style.backgroundColor = "' + sc + '"; flex[i].style.opacity = "95%"; }'
            + 'var px2 = document.getElementsByClassName("px-2 ");'
            + 'for (var i = 0; i < px2.length; i++) { px2[i].style.backgroundColor = "' + sc + '"; px2[i].style.opacity = "95%"; }'

        });
    });
  });
});
