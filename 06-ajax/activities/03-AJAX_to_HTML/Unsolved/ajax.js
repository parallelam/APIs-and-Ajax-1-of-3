$.get('https://my.api.mockaroo.com/people.json?key=bad39300').then(function(response){
    console.log(response);
    var tbody = $('tbody');
    for (var i = 0; i < response.length; i++){
        var tr = $('<tr>');
        var td1 = $('<td>').text(response[i].id);
        var td2 = $('<td>').text(response[i].first_name);
        var td3 = $('<td>').text(response[i].last_name);
        var td4 = $('<td>').text(response[i].gender);
        var td5 = $('<td>').text(response[i].email);

        tr.append(td1, td2, td3, td4, td5);
        tbody.append(tr);
    }
})