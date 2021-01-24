window.addEventListener("load", function() {
    chrome.storage.sync.get(["activated"], ({ activated }) => {
        if (activated == undefined) {
            chrome.storage.sync.set({ activated: false });
        }

        if (activated) {
            function waitForElement() {
                let elem = document.querySelector("#vilos-player");
                if (elem != null && elem != undefined) {
                    //variable exists
                    console.log("requesting fullscreen")
                    elem.style.position = "fixed";
                    elem.style.left = "0";
                    elem.style.top = "0";

                    // Need to hide all elements except #vilos-player
                    document
                        .querySelectorAll("body *:not( #vilos-player )")
                        .forEach((value) => {
                            if (!value.querySelector("#vilos-player")) {
                                value.style.display = "none";
                            }
                        });
                } else {
                    setTimeout(waitForElement, 250);
                }
            }
            waitForElement()
        }
    });
});