$.ajax({
    url: `https://quarkbackend.com/getfile/karbassi/user-profiles`,
    type: "GET",
    success: function (response) {
        for (var i = 0; i < response.length; i++) {
            var user = response[i];
            updateUserInfo(i, user);
        }
    }
});

function updateUserInfo(index, user) {
    var $user = $(".user-profile").eq(index);

    $user.find(".thumbnail").find("img").attr("src", user.picture);
    $user.find(".caption").find("h3").text(user.name.first + " " + user.name.last);
    $user.find(".company").find(".name").text(user.company.name);
    $user.find(".company").find(".street").text(user.company.address.street);
    $user.find(".company").find(".city").text(user.company.address.city);
    $user.find(".company").find(".state").text(user.company.address.state);
    $user.find(".company").find(".zip").text(user.company.address.zip);


}