// JavaScript source code
"use strict";

function Startup() {

    let jsenabledelement = document.getElementsByClassName("jsremove");

    //While loop used because a for let of loop would skip over some elements in the collection for an unidentified reason
    while (jsenabledelement.length > 0) {
        jsenabledelement.item(0).classList.remove("jsremove");
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
