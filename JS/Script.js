var count;
function FormLoad() {
    count = "10";
    var counter = setInterval(timer, 1000);
}
function timer() {

    count = count - 1;

    if (count < 0) {
        clearInterval(counter);

        return;
    }
    document.getElementById("CountDownTimer").innerHTML = count;
    var today = new Date();
    var second = today.getSeconds();
    if (count <= 0) {
        document.getElementById("CountDownTimer").innerHTML = "";
        document.getElementById("LinkToTerabox").style.visibility = "visible";

        getText();
    }
}
function getText() {
    let storedText;
    var AnimeShareLinkText = new URL(window.location.origin);
    var AnimeShareLinkText1 = AnimeShareLinkText + "/Data/AnimeShareLink.txt";

    fetch(AnimeShareLinkText1)
        .then(function (response) {
            response.text().then(function (text) {
                storedText = text;
                done();
            });
        });
    function done() {
        let AnimeLink = new URL(window.location.href);
        let params = new URLSearchParams(AnimeLink.search);
        let AnimeId = params.get('AnimeId');

        let LineText = storedText.split('\n');
        var A = "1";
        var No = 1;
        try {
            while (A == "1") {
                let SplitedLine = LineText[No - 1].split("_____");
                if (SplitedLine[0] == AnimeId) {
                    document.getElementById("LinkToTerabox").href = SplitedLine[2];
                    A = "2";
                    return;
                }
                No = No + 1;
            }
        }
        catch
        {
            alert("ww");
        }
    }
}