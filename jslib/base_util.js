var SERVER_IP = "";
var SERVER_PRE_URL = SERVER_IP + "/foryou-platform/app/";
var httpSend;
var params;
var baseUtile = {
    httpSend: function(url, data, callBackFun, btnDom) {
        if (btnDom != null && btnDom != "undefined") {
            mui(btnDom).button('loading');
        }
        mui.ajax(SERVER_PRE_URL + url + ".php", {
            data: data,
            dataType: 'json',
            type: 'post',
            timeout: 10000,
            success: function(data) {
                if (btnDom != null && btnDom != "undefined") {
                    mui(btnDom).button('reset');
                }
                if (data.redirectUrl != null && typeof data.redirectUrl != 'undefined') {
                    window.location.href = data.redirectUrl;
                } else {
                    callBackFun(data);
                }
            },
            error: function(xhr, type, errorThrown) {
                console.log(type);
            }
        });
    },
    params: function(data) {
        var s = [];
        for (var key in data) {
            var value = data[key]
            if (typeof(value) == 'object') {
                for (var o in value) {
                    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value[o]);
                }
            } else {
                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
            }
        }
        return s = s.toString().replace(/,/g, '&');
    }
}