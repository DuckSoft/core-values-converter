const core_values = "富强民主文明和谐自由平等公正法治爱国敬业诚信友善";

function go_encode() {
    document.getElementById('txtdec').value = [].slice.call(document.getElementById('txtenc').value).map(function (chr) {
        var asc = chr.charCodeAt(0);
        var out = "";

        var jj = asc;
        for (var i = 0; i < 4; ++i) {
            ii = jj % 24;
            out += core_values[ii];
            jj = Math.floor(jj / 24);
        }
        return out;
    }).join('');
}

function go_decode() {
    document.getElementById('txtenc').value = chunk([].slice.call(document.getElementById('txtdec').value),4).map(function (group) {
        return group.map(function (chr) {
            return core_values.indexOf(chr);
        }).reduceRight(function(prev, value) {
            return prev*24 + value;
        }, 0);
    }).map(function (asc) {
        return String.fromCharCode(asc);
    }).join('');
}
