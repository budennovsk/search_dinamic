let params = {

    'weight': '',
    'heigth': '',
    'radius': '',
    'season': '',
    'model': '',
    'brand': '',
    'spikes': '',
    'article': '',
    'runflat': '',
}


function paramsChange(e) {

    var paramsDict = params[$(e).attr('id')] = $(e).val();
    var paramsDictMode = JSON.stringify(params);


    $.ajax({
        url: $('#v').data('url'),
        type: 'GET',
        dataType: 'json',
        data: {
            data_p: paramsDictMode
        },
        success: function (response) {
            console.log(response)
            $('tr.align-middle').remove()
            var data = response['data']

            var dataLen = data.length
            for (var i = 0; i < dataLen; i++) {
                var dataOut = data[i];
                console.log(dataOut)

                var row = '<tr class="align-middle"><td class="align-middle"><center><input class="checker custom-checkbox" type="checkbox" name="check"></center></td><td class="align-middle">' + dataOut['title'] + '</td><td class="align-middle">' + dataOut['count'] + '</td><td class="align-middle">' + dataOut['price'] + '</td><td class="align-middle">' + Number(dataOut['price']) * 4 + '</td><td class="align-middle">' + dataOut['address'] + '</td>'
                $('#table-body').append(row);
            }

        },
        error: function (response) {
            // предупредим об ошибке
            if (response.status === 400) {
                alert('Error')
            }
        }
    });

}



