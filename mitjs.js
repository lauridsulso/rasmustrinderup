fetch("https://dawa.aws.dk/postnumre")
    .then(function (data) {
        return data.json();
    })
    .then(function (post) {
        for (let i = 0; i < post.length; i++) {
            document.getElementById("pbliste").insertAdjacentHTML("beforeend", "<option>" + post[i].nr + " " + post[i].navn + "</option>");
        }
    })
