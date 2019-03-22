function browserVersion(types) {
    var other = 1;
    for (i in types) {
        var v = types[i] ? types[i] : i;
        if (USERAGENT.indexOf(v) != -1) {
            var re = new RegExp(v + '(\\/|\\s|:)([\\d\\.]+)', 'ig');
            var matches = re.exec(USERAGENT);
            var ver = matches != null ? matches[2] : 0;
            other = ver !== 0 && v != 'mozilla' ? 0 : other;
        } else {
            var ver = 0;
        }
        eval('BROWSER.' + i + '= ver');
    }
    BROWSER.other = other;
}