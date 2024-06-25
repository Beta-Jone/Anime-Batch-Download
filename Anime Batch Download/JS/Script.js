var count;

function StartTimer() {
    document.getElementById("GenerateDownloadLink").style.visibility = "hidden";
    document.getElementById("GeneratingDownloadLinkText").style.visibility = "visible";
    count = "16";
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
        done();
    }
}
function done() {
    let AnimeLink = new URL(window.location.href);
    let params = new URLSearchParams(AnimeLink.search);
    let AnimeId = params.get('AnimeId');

    localStorage.setItem("AnimeId", AnimeId);

    window.location.assign("Page/Download.html");
}
function getLink() {
    let storedText;
    var AnimeShareLinkText = new URL(window.location.origin);
    var AnimeShareLinkText1 = AnimeShareLinkText + "/Data/AnimeShareLink.txt";
    let AnimeId = localStorage.getItem("AnimeId");

    fetch(AnimeShareLinkText1)
        .then(function (response) {
            response.text().then(function (text) {
                storedText = text;

                let LineText = storedText.split('\n');
                var A = "1";
                var No = 1;
                try {
                    while (A == "1") {
                        let SplitedLine = LineText[No - 1].split("_____");
                        if (SplitedLine[0] == AnimeId) {
                            document.getElementById("AnimeTitle").innerHTML = SplitedLine[1];
                            document.getElementById("LinkToTerabox").href = SplitedLine[2];
                            document.getElementById("LinkToTerabox").style.visibility = "visible";
                            A = "2";
                            return;
                        }
                        No = No + 1;
                    }
                }
                catch
                {
                    alert("Error No Anime Found!");
                }
            });
        });
   
}