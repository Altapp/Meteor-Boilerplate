trimArray = function(arrayToTrim, maxLength) {

    if (!arrayToTrim || typeof arrayToTrim === 'undefined' || typeof maxLength === 'undefined')
        return arrayToTrim;

    if (arrayToTrim.length > maxLength)
        arrayToTrim.length = maxLength;

    return arrayToTrim;
};

sortKeyArrayByVal = function(keyValArray) {
    var sortable = [];
    for (var key in keyValArray)
        sortable.push([key, keyValArray[key]]);
    sortable.sort(function(a, b) {
        return a[1] - b[1]
    });
    return sortable;
};

validateEmail = function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

validateUsername = function(username) {
    var re = /^[a-z0-9]+$/i;
    return re.test(username) && username.length >= 3 && username.length <= 25;
};
