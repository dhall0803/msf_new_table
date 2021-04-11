jQuery.get('https://3zisga6su2.execute-api.eu-west-2.amazonaws.com/gigs', function (data) {
    var json = JSON.parse(data);
    var html = "";
    for (var i = 0; i < json.length; i++) {
        var splitDate = json[i]['date'].split("-");
        var year = splitDate[0]
        var month = splitDate[1]
        var day = splitDate[2]
        var dateObj = new Date(year, month -1, day)
        html = html.concat('<tr class="white-bg"><td>', dateObj.toDateString().substring(4), '</tr></td>', '<tr class="black-bg"><td>', json[i]['title'], '</tr></td>');
    }
    jQuery('#JS_Table_Content').html(html); 
})