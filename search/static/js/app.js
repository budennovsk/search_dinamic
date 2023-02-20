let params = {
    'store':'tireshop',
    'title':'',
    'width':'',
    'heigth':'',
    'radius':'',
    'season':'',
    'model':'',
    'brand':'',
    'spike':'',
    'runflat':'',
    'sort':'priceup',
}

spike = '<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.74 18.43"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#E01813" d="M2.23 16.43h16.3l-8.16-14.1c-2.7 4.7-5.43 9.4-8.14 14.1M10.18.01c.67-.08 1.36.27 1.7.85l8.6 14.9c.4.65.33 1.53-.18 2.1-.32.34-.8.57-1.27.57H2c-.17 0-.37 0-.55-.02a1.75 1.75 0 01-1.24-2.58l8.57-14.8c.06-.1.12-.23.2-.33.3-.38.74-.64 1.2-.69"></path><path fill="#FFF" d="M2.23 16.43h16.3l-8.16-14.1c-2.7 4.7-5.43 9.4-8.14 14.1z"></path><path d="M6.86 9.44h1.26v4.83h1.6V9.43h1.25v4.83h1.58V9.42h1.27v6.14H6.86V9.42v.02z"></path></g></svg>'
winter = '<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#006EFF" d="M440.1 355.2l-39.2-23 34.1-9.3c8.4-2.3 13.4-11.1 11.1-19.6l-4.1-15.5c-2.2-8.5-10.9-13.6-19.3-11.3L343 298.2 271.2 256l71.9-42.2 79.7 21.7c8.4 2.3 17-2.8 19.3-11.3l4.1-15.5c2.2-8.5-2.7-17.3-11.1-19.6l-34.1-9.3 39.2-23c7.5-4.4 10.1-14.2 5.8-21.9l-7.9-13.9c-4.3-7.7-14-10.3-21.5-5.9l-39.2 23 9.1-34.7c2.2-8.5-2.7-17.3-11.1-19.6l-15.2-4.1c-8.4-2.3-17 2.8-19.3 11.3l-21.3 81-71.9 42.2v-84.5L306 70.4c6.1-6.2 6.1-16.4 0-22.6l-11.1-11.3c-6.1-6.2-16.1-6.2-22.2 0l-24.9 25.4V16c0-8.8-7-16-15.7-16h-15.7c-8.7 0-15.7 7.2-15.7 16v46.1l-24.9-25.4c-6.1-6.2-16.1-6.2-22.2 0L142.1 48c-6.1 6.2-6.1 16.4 0 22.6l58.3 59.3v84.5l-71.9-42.2-21.3-81c-2.2-8.5-10.9-13.6-19.3-11.3L72.7 84c-8.4 2.3-13.4 11.1-11.1 19.6l9.1 34.7-39.2-23c-7.5-4.4-17.1-1.8-21.5 5.9l-7.9 13.9c-4.3 7.7-1.8 17.4 5.8 21.9l39.2 23-34.1 9.1c-8.4 2.3-13.4 11.1-11.1 19.6L6 224.2c2.2 8.5 10.9 13.6 19.3 11.3l79.7-21.7 71.9 42.2-71.9 42.2-79.7-21.7c-8.4-2.3-17 2.8-19.3 11.3l-4.1 15.5c-2.2 8.5 2.7 17.3 11.1 19.6l34.1 9.3-39.2 23c-7.5 4.4-10.1 14.2-5.8 21.9L10 391c4.3 7.7 14 10.3 21.5 5.9l39.2-23-9.1 34.7c-2.2 8.5 2.7 17.3 11.1 19.6l15.2 4.1c8.4 2.3 17-2.8 19.3-11.3l21.3-81 71.9-42.2v84.5l-58.3 59.3c-6.1 6.2-6.1 16.4 0 22.6l11.1 11.3c6.1 6.2 16.1 6.2 22.2 0l24.9-25.4V496c0 8.8 7 16 15.7 16h15.7c8.7 0 15.7-7.2 15.7-16v-46.1l24.9 25.4c6.1 6.2 16.1 6.2 22.2 0l11.1-11.3c6.1-6.2 6.1-16.4 0-22.6l-58.3-59.3v-84.5l71.9 42.2 21.3 81c2.2 8.5 10.9 13.6 19.3 11.3L375 428c8.4-2.3 13.4-11.1 11.1-19.6l-9.1-34.7 39.2 23c7.5 4.4 17.1 1.8 21.5-5.9l7.9-13.9c4.6-7.5 2.1-17.3-5.5-21.7z"></path></svg>'
summer = '<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FF8C00" d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>'
rft = '<svg id="icon-rft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 161.01"><path fill="%23222" d="M61.42 110.37l-10.78 50.64H0L34.36 0h75.34c21.33 0 36.72 3.59 46.15 10.78 9.43 7.3 14.15 18.98 14.15 35.03 0 8.2-1.35 15.61-3.93 22.34s-5.73 12.01-9.32 15.83c-7.19 7.64-15.05 13.36-20.32 15.16l-3.93 1.35-.45 1.91 26.72 58.61h-55.92l-20.66-50.64H61.42zm39.63-68.94H76.13l-5.95 27.62h24.81c13.47 0 20.32-3.93 20.32-16.17 0-7.63-4.71-11.45-14.26-11.45zm73.66 119.58L209.07 0h138.89l-8.31 39.19h-88.36l-6.85 31.89h72.2l-7.86 36.83h-72.2l-11.23 53.11h-50.64zM348.29 41.43L357.05 0H512l-8.65 41.43h-52.21l-25.6 119.58h-50.53L400.5 41.43h-52.21z"/></svg>'

function loadData(params) {
    url = `https://api.tiredrop.ru/getTires/${params.store}?width=${params.width}&heigth=${params.heigth}&radius=${params.radius}&brand=${params.brand}&model=${params.model}&season=${params.season}&runflat=${params.runflat}&spike=${params.spike}&sort=${params.sort}`
    $('#table-body').html('')
    $.ajax({
        type: "POST",
        url: url,
        crossDomain : true,
        xhrFields: {
            withCredentials: true
        }
    })
    .done(function( data ) {
        console.log(url);
        data.forEach(tire => {
            let stores = ''
            let season = tire.season=='W' ? winter : summer;
            let is_spike = tire.spike=='Y' ? spike : '';
            let is_rft = tire.runflat=='Y' ? rft : '';
            row = `<tr class="align-middle"><td class="align-middle"><center><input onchange="updateTiresList()" class="checker custom-checkbox" type="checkbox" name="check" data-tire="${tire.title} - ${tire.price}р/шт"></center></td><td class="align-middle">${tire.title}  ${season} ${is_spike} ${is_rft}</td><td class="align-middle">${tire.quantity}</td><td class="align-middle">${tire.price}</td><td class="align-middle">${tire.price*4}</td>`
            storehouses = tire.storehouse
            if (params.store == 'tireshop') {
                storehouses.forEach(store => {
                    for (const key in store) {
                        stores += `<span style="font-family: 'Spectral', serif;">${key}:</span>&nbsp <span style="font-weight:bold;">${store[key]}</span> <br>`
                    }
                });
            } else {
                if (params.store == 'exclusive') {
                    runflat = tire.runflat=='Y' ? 1 : 0;
                    spike = tire.spike=='Y' ? 1 : 0;
                    season = tire.season=='W' ? 1 : 0;
                    url = `https://b2b.tyres.spb.ru/catalog/list?alias=tyre&TyreSearch%5B1c_txt%5D=&TyreSearch%5Bid_store%5D=&TyreSearch%5Bid_brand%5D=${tire.brand}&TyreSearch%5Bw%5D=${tire.width}&TyreSearch%5Bh%5D=${tire.heigth}&TyreSearch%5Bd%5D=${tire.radius}&TyreSearch%5Bseason%5D=${season}&TyreSearch%5Bspike%5D=${spike}&TyreSearch%5BrunFlat%5D=${runflat}&TyreSearch%5Bc%5D=&TyreSearch%5Bqnt%5D=&action=submit`
                }
                if (params.store == 'shinservice') {
                    url = `https://duplo.shinservice.ru/tyre/search?brand=${tire.brand.toLowerCase()}&season=${tire.season.toLowerCase()}&sizes=${tire.width}_${tire.heigth}_${tire.radius}_`
                    url = tire.spike=='Y' ? url + '&pins=1' : url;
                }
                if (params.store == 'tochki') {
                    season = tire.season=='W' ? 2 : 1;
                    season = tire.spike=='Y' ? season+'01' : season+'02';
                    url = `https://b2b.4tochki.ru/Product/Tire?kpt=1&fc_pst=1&cmpx=0&ft_do=&ft_w=${tire.width}&ft_h=${tire.heigth}&ft_d=${tire.radius}&ft_s=${season}&fc_b=${tire.brand}&fc_c=&fc_vc=&ft_p=0&fc_mq=&fc_wh=115&ft_fs=`
                }
                if (params.store == 'yst') {
                    url = encodeURI(`https://terminal.yst.ru/app/#/tyres/?filters={"search":"${tire.title}","onWarehouse":true}`)
                }
                stores = `<a role="button" class="btn btn-success buy" target="_blank" href="${url}">Оформить</a>`
            }
            row=row+`<td class="align-middle" style="font-size:.7em;">${stores}</td></tr>`
            $('#table-body').append(row);
        });
    })
    .fail( function(xhr, textStatus, errorThrown) {
        alert(xhr.responseText);
        alert(textStatus);
    });
}

function clearparams() {
    params = {
        'store':'tireshop',
        'title':'',
        'width':'',
        'heigth':'',
        'radius':'',
        'season':'',
        'model':'',
        'brand':'',
        'spike':'',
        'runflat':'',
        'sort':'priceup',
    }
    $("select").prop('selectedIndex', -1)
    $('#table-body').html('');
}

function paramsChange(e) {
    if ($(e).attr('class') == 'stor') {
        if ($(e).attr('id') == 'price') {
            params.sort = params.sort=='pricedown' ? 'priceup' : 'pricedown';
        }
        if ($(e).attr('id') == 'col') {
            params.sort = params.sort=='colup' ? 'coldown' : 'colup';
        }
    }else{
        params[$(e).attr('id')]=$(e).val()
    }
    loadData(params)
}

function updateTiresList() {
    $('#list').val('')
    $('input:checkbox.checker').each(function () {
        var sThisVal = (this.checked ? $(this).val() : "");
        if (sThisVal) {
            value = `${$('#list').val()}${$(this).attr('data-tire')}\n`
            $('#list').val(value)
        }
   });
}

function copylist() {
    navigator.clipboard.writeText($('#list').val())
}
let check = false;
function openbases() {
    check = check ? false : true
    if (check) {
        $('#changer-fly').addClass('show-bases')
    }else{
        $('.show-bases').removeClass('show-bases') 
    }
}

function setstore(store) {
    params.store=store
    loadData(params)
}