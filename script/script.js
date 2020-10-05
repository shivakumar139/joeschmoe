//when user click on button then this run
$("#submit").click(function () {
    const name = $("#name").val();
    if (name == "") {
        //changing the image src attribute with default image
        $("#changeImg").attr("src", `img/jacques.svg`);
    }
    else {
        //changing the src attribute with dynamically
        $("#changeImg").attr("src", `https://joeschmoe.io/api/v1/${name}`);
    }
});