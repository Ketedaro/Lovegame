$( document ).ready(function() {
    console.log( "Ready !" );
});

$("#submit_button").click(function() {
    $("#image").html("");
    var first_name = document.getElementsByClassName("first_name")[0];
    var second_name = document.getElementsByClassName("second_name")[0];
    console.log(first_name.value);
    console.log(second_name.value);
    
    if (!first_name.value || !second_name.value) {
        Materialize.toast("Fill all required fields !", 3000, 'rounded');
    } else if (!/^[a-zA-Z()]+$/.test(first_name.value) || !/^[a-zA-Z()]+$/.test(second_name.value)) {
        Materialize.toast("Real names only !", 3000, 'rounded');
    } else {
        var fn_score = 0;
        var sn_score = 0;
        
        for (i = 0; i < first_name.value.length; i++) {
            fn_score += first_name.value.charCodeAt(i);
        }
        
        for (i = 0; i < second_name.value.length; i++) {
            sn_score += second_name.value.charCodeAt(i);
        }
        
        console.log("Score 1 : " + fn_score + " - Score 2 : " + sn_score);

        var total_score = 100 * Math.min(fn_score, sn_score) / Math.max(fn_score, sn_score);

        console.log("Total Score : " + total_score);

        $("#score").text("Score : " + precisionRound(total_score, -1));

        if (total_score < 30) {
            $("#image").attr("src","images/pepe.png");
        } else if (total_score > 30 && total_score < 50) {
            $("#image").attr("src","images/harold.png");
        } else if (total_score > 50 && total_score < 80) {
            $("#image").attr("src","images/looksgood.png");
        } else if (total_score > 80 && total_score < 100) {
            $("#image").attr("src","images/kylo.png");
        } else if (total_score == 100) {
            $("#image").attr("src","images/bean.png");
        }
    }
})

$("#renew_button").click(function() {
    $(".first_name").val('');
    $(".second_name").val('');
    $("#image").attr("src","");
    $("#score").empty();
})

function precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}

