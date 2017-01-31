for(var i = 0; i<hotels.length; i++){
    $("#hotel-choices").append(
        "<option>"+hotels[i].name+"</option>"
    )
}

for(var i = 0; i<restaurants.length; i++){
    $("#restaurant-choices").append(
        "<option>"+restaurants[i].name+"</option>"
    )
}

for(var i = 0; i<activities.length; i++){
    $("#activity-choices").append(
        "<option>"+activities[i].name+"</option>"
    )
}

$("#add-hotel").click(function() {
    var button
    var hotelChoice = $("#hotel-choices").val()
    $("#hotel-group").append(
        "<option>" + hotelChoice + "</option>"
    )
    // .append(
    //    "<button class="btn btn-xs btn-danger remove btn-circle">x</button>" 
    // )
})

$("#add-restaurant").click(function() {
    var restaurantChoice = $("#restaurant-choices").val()
    $("#restaurant-group").append(
        "<option>" + restaurantChoice + "</option>"
    )
})

$("#add-activity").click(function() {
    var activityChoice = $("#activity-choices").val()
    $("#activity-group").append(
        "<option>" + activityChoice + "</option>"
    )
})





