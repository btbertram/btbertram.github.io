// JavaScript source code
"use strict";

function Startup() {

    let jsenabledelement = document.getElementsByClassName("jsremove");

    for (let element of jsenabledelement) {
        element.classList.remove("jsremove");
    }

    document.getElementById("aboutbutton").addEventListener("click", function () { SetActiveButton("aboutbutton"), ShowTabbedContent("aboutcontent"); });
    document.getElementById("contactbutton").addEventListener("click", function () { SetActiveButton("contactbutton"), ShowTabbedContent("contactcontent"); });
    document.getElementById("projectbutton").addEventListener("click", function () { SetActiveButton("projectbutton"), ShowTabbedContent("projectcontent"); });

    //Default to showing Projects on Page Open
    ShowTabbedContent("projectcontent");
    SetActiveButton("projectbutton");
}

function ShowTabbedContent(id) {
    let elementsToHide = document.getElementsByClassName("headlinecontent");
    let elementToShow = document.getElementById(id);

    for (let element of elementsToHide) {
        element.classList.add("hide");
    }

    elementToShow.classList.remove("hide");
    //add code to resize headline container here. Transitions don't work with auto.


}

function SetActiveButton(id) {
    let elementsToDeactive = document.getElementsByClassName("headlinebutton");
    let elementToActive = document.getElementById(id);

    for (let element of elementsToDeactive) {
        element.classList.remove("activebutton");
    }

    elementToActive.classList.add("activebutton");

}
