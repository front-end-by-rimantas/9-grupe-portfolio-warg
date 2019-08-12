function uniqueWords( list2d, key='' ) {
    let dictionary = [];

    if ( !Array.isArray(list2d) ) {
        return dictionary;
    }

    list2d.forEach( list => {
        if ( Array.isArray(list) ) {
            list.forEach( word => {
                if ( typeof(word) === 'string' &&
                     dictionary.indexOf(word) === -1 ) {
                    dictionary.push( word );
                }
            });
        } else {
            if ( typeof(list) === 'object' &&
                 list !== null &&
                 typeof(key) === 'string' &&
                 list[key] !== undefined &&
                 Array.isArray( list[key] ) ) {
                list[key].forEach( word => {
                    if ( typeof(word) === 'string' &&
                         dictionary.indexOf(word) === -1 ) {
                        dictionary.push( word );
                    }
                });
            }
        }
    });

    return dictionary;
}