$.get('https://3zisga6su2.execute-api.eu-west-2.amazonaws.com/gigs', function (data) {
    var json = JSON.parse(data);
    var html = "";
    for (var i = 0; i < json.length; i++) {
        html = html.concat('<tr><td>', json[i]['date'], '</tr></td>');
        html = html.concat('<tr><td>', json[i]['title'], '</tr></td>');
    }
    $('#JS_Table_Content').html(html); 
})