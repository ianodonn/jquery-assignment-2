$.ajax({
    url: `https://quarkbackend.com/getfile/karbassi/user-profiles`,
    type: "GET",
    success: function(response) {
        for (var i = 0; i < response.length; i++) {
            var user = response[i];
        }
    }
});