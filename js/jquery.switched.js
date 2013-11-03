(function ($) {

    var obj
    $.fn.switched = function (options) {

        var settings = $.extend({
            network: '{"network":"TempNetwork","portCount":22,"portAdd":2,"startOdd":0,"ports":[{"port":1,"portFail":1},{"port": 2,"mac": "00-00-00-00-00-0","computerName": "Computer"}]}'
        }, options);


        obj = jQuery.parseJSON(settings.network);

        var $table = $('<table/>').addClass('nw0101networks');
        var $row = $('<tr/>');
        $row.addClass('nw0101portNames')
        for (var i = 1; i < obj.portCount; i += 2) {
            $row.append('<td>' + i + '</td>')
        }
        if (obj.portAdd > 0) {
            for (var i = 0; i < obj.portAdd; i++) {
                $row.append('<td></td>')
            }
        }
        $table.append($row);

        $row = $('<tr/>');
        $row.addClass('nw0101ports')
        for (var i = 1; i < obj.portCount + 1; i += 2) {
            var $yup = 0;
            var $fail = 0
            $(obj.ports).each(function (index, ele) {
                if (ele.port === i) {
                    if (ele.portFail === 1) {
                        $fail = 1
                    }
                    $yup = 1
                }
            });




            if ($yup === 1) {
                if ($fail === 1) {
                    $row.append('<td class="nw0101fail"><a href="#" title="' + i + '"></a></td>')
                } else {
                    $row.append('<td class="nw0101on"><a href="#" title="' + i + '"></a></td>')
                }

            } else {
                $row.append('<td class="nw0101off"><a href="#" title="' + i + '"></a></td>')
            }
        }
        if (obj.portAdd > 0) {
            for (var i = 0; i < obj.portAdd; i++) {
                $row.append('<td class="nw0101blank"></td>');
            }
        }
        $table.append($row);

        $row = $('<tr/>');
        $row.addClass('nw0101ports')
        for (var i = 2; i < obj.portCount + 1; i += 2) {
            var $yup = 0;
            var $fail = 0
            $(obj.ports).each(function (index, ele) {
                if (ele.port === i) {
                    if (ele.portFail === 1) {
                        $fail = 1
                    }
                    $yup = 1
                }
            });
            if ($yup === 1) {
                if ($fail === 1) {
                    $row.append('<td class="nw0101fail"><a href="#" title="' + i + '"></a></td>')
                } else {
                    $row.append('<td class="nw0101on"><a href="#" title="' + i + '"></a></td>')
                }

            } else {
                $row.append('<td class="nw0101off"><a href="#" title="' + i + '"></a></td>')
            }
        }
        if (obj.portAdd > 0) {
            for (var i = 0; i < obj.portAdd; i++) {
                var $yup = 0;
                $(obj.ports).each(function (index, ele) {
                    if (ele.port === obj.portCount + i + 1) {
                        console.log(ele.port)
                        $yup = 1
                    }
                });




                if ($yup === 1) {
                    $row.append('<td class="nw0101on"><a href="#" title="' + (obj.portCount + i + 1) + '"></a></td>')
                } else {
                    $row.append('<td class="nw0101off"><a href="#" title="' + (obj.portCount + i + 1) + '"></a></td>')
                }
            }
        }
        $table.append($row);

        // create row of labels (bottom)
        $row = $('<tr/>');
        $row.addClass('nw0101portNames')
        for (var i = 2; i < obj.portCount + 1; i += 2) {
            $row.append('<td>' + i + '</td>')
        }
        if (obj.portAdd > 0) {
            for (var i = 0; i < obj.portAdd; i++) {
                $row.append('<td>' + (obj.portCount + i + 1) + '</td>')
            }
        }
        $table.append($row);
        this.append($table);

        $('a').click(function () {
            $('#portInfo').html('MAC: ' + portInfoFinder($(this).attr('title')).mac + '<br/>Computer: ' + portInfoFinder($(this).attr('title')).computerName);
        });


        function portInfoFinder(portNum) {
            portNum = parseInt(portNum);
            var $retObj;
            $(obj.ports).each(function (index, ele) {
                if (ele.port === portNum) {
                    $retObj = ele;
                    //gamesPlayed: gamesPlayed
                }
            });
            if ($retObj === undefined) {
                $retObj = {
                    "port": portNum,
                    "mac": "not found",
                    "computerName": ""
                }

            }

            return $retObj;
        }
        return this;
    };

}(jQuery));