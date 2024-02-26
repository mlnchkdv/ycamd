"use strict";
var cutMusturd = {};

if (document.documentElement.classList.add) {
  cutMusturd.addClass = function(el, className) {
    return el.classList.add(className);
  };
}
if (cutMusturd.addClass) {
  console.log("cutting the mustard!");
  var pageTheme = document.querySelector("body");
  pageTheme.classList.add("isJs-template");

  {
    var $firstCol = $(".infoTable-multitrack td:nth-child(2)"),
      $secondCol = $(".infoTable-multitrack td:nth-child(3)"),
      $thirdCol = $(".infoTable-multitrack td:nth-child(4)"),
      $tableCells = $(".infoTable tbody td:not('.infoTable-btn')"),
      $tableTabs = $(".infoTable .infoTable-btn span"),
      btn = document.getElementById("trackA"),
      btn2 = document.getElementById("trackB"),
      btn3 = document.getElementById("trackC");
    $firstCol.addClass("showTableCol");
    function expandColum(column, el) {
      $tableTabs.removeClass("infoTable-tab--active");
      $tableCells.removeClass("showTableCol");
      column.addClass("showTableCol");
      el.classList.add("infoTable-tab--active");
    }
    btn.addEventListener("click", function() {
      expandColum($firstCol, this);
    });
    btn2.addEventListener("click", function() {
      expandColum($secondCol, this);
    });
    btn3.addEventListener("click", function() {
      expandColum($thirdCol, this);
    });
  }
}