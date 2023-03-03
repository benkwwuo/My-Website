function customAlrt() {
    const dialog1 = document.getElementById("custDialog1");
    document.getElementById("show1").onclick = function() {
        document.getElementById("innerP1").innerHTML = "Alert pressed!";
        dialog1.show();
    };
    document.getElementById("hide1").onclick = function() {
        dialog1.close();
    };
};

function customCnfm() {
    const dialog2 = document.getElementById("custDialog2");
    document.getElementById("show2").onclick = function() {
        document.getElementById("innerP2").innerHTML = "Do you confirm this?";
        dialog2.show();
    };
    document.getElementById("hide2").onclick = function() {
        dialog2.close();
        setCustOutput("Confirm result : true");
    };
    document.getElementById("cancel1").onclick = function() {
        dialog2.close();
        setCustOutput("Confirm result : false");
    };
};

function customPrompt() {
    const dialog3 = document.getElementById("custDialog3");
    document.getElementById("show3").onclick = function() {
        document.getElementById("innerP3").innerHTML = "Enter something: ";
        dialog3.show();
    }; 
    //user clicks cancel, doesn't matter if they entered anything, show user didnt enter anything
    document.getElementById("cancel2").onclick = function() {
        dialog3.close();
        setCustOutput("Prompt result : User didn't enter anything");
    };
    //user clicks ok, either the submit is empty string or has something
    document.getElementById("hide3").onclick = function() {
        dialog3.close();
        var input = document.getElementById("inputCustPrompt").value;
        if (input === "") {
            setCustOutput("Prompt result : User didn't enter anything")
        }
        else {
            var clean = DOMPurify.sanitize(input);
            setCustOutput("Prompt result : " + clean);
        }
    };
};

function setCustOutput(value) {
    var custOut = document.getElementById("display2");
    custOut.style.display = "block";
    custOut.innerHTML = value;
};




