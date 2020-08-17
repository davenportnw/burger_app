
$(".come-form").on("click", function(event) {
    event.preventDefault();
    //Grab from object and turn into string
    let burger_id = $(this).children(".burger_id").val();
    console.log('burger_id', burger_id);
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:3000/burgers/' + burger_id
    }). then(function(data) {
        //Show when a burger is eaten.
        console.log('data', data);
        location.reload();
    })
}); 