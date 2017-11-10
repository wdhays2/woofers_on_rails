$(document).ready(function() {
    $('.drivers').DataTable();
} );

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min_rms = parseInt( $('#min_rms').val(), 10 );
        var max_rms = parseInt( $('#max_rms').val(), 10 );
        var rms_power = parseFloat( data[7] ) || 0; // use data for the rms_power column

        if ( ( isNaN( min_rms ) && isNaN( max_rms ) ) ||
             ( isNaN( min_rms ) && rms_power <= max_rms ) ||
             ( min_rms <= rms_power   && isNaN( max_rms ) ) ||
             ( min_rms <= rms_power   && rms_power <= max_rms ) )
        {
            return true;
        }
        return false;
    }
);

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min_size = parseInt( $('#min_size').val(), 10 );
        var max_size = parseInt( $('#max_size').val(), 10 );
        var size = parseFloat( data[2] ) || 0; // use data for the size column

        if ( ( isNaN( min_size ) && isNaN( max_size ) ) ||
             ( isNaN( min_size ) && size <= max_size ) ||
             ( min_size <= size   && isNaN( max_size ) ) ||
             ( min_size <= size   && size <= max_size ) )
        {
            return true;
        }
        return false;
    }
);

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min_xmax = parseFloat( $('#min_xmax').val());
        var max_xmax = parseFloat( $('#max_xmax').val());
        var xmax = parseFloat( data[9] ) || 0; // use data for the xmax column

        if ( ( isNaN( min_xmax ) && isNaN( max_xmax ) ) ||
             ( isNaN( min_xmax ) && xmax <= max_xmax ) ||
             ( min_xmax <= xmax   && isNaN( max_xmax ) ) ||
             ( min_xmax <= xmax   && xmax <= max_xmax ) )
        {
            return true;
        }
        return false;
    }
);

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min_qts = parseFloat( $('#min_qts').val());
        var max_qts = parseFloat( $('#max_qts').val());
        var qts = parseFloat( data[12] ) || 0; // use data for the qts column

        if ( ( isNaN( min_qts ) && isNaN( max_qts ) ) ||
             ( isNaN( min_qts ) && qts <= max_qts ) ||
             ( min_qts <= qts   && isNaN( max_qts ) ) ||
             ( min_qts <= qts   && qts <= max_qts ) )
        {
            return true;
        }
        return false;
    }
);

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min_svol = parseFloat( $('#min_svol').val());
        var max_svol = parseFloat( $('#max_svol').val());
        var svol = parseFloat( data[15] ) || 0; // use data for the sealed volume column

        if ( ( isNaN( min_svol ) && isNaN( max_svol ) ) ||
             ( isNaN( min_svol ) && svol <= max_svol ) ||
             ( min_svol <= svol   && isNaN( max_svol ) ) ||
             ( min_svol <= svol   && svol <= max_svol ) )
        {
            return true;
        }
        return false;
    }
);

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min_sf3 = parseInt( $('#min_sf3').val(), 10 );
        var max_sf3 = parseInt( $('#max_sf3').val(), 10 );
        var sf3 = parseFloat( data[16] ) || 0; // use data for the sealed f3 column

        if ( ( isNaN( min_sf3 ) && isNaN( max_sf3 ) ) ||
             ( isNaN( min_sf3 ) && sf3 <= max_sf3 ) ||
             ( min_sf3 <= sf3   && isNaN( max_sf3 ) ) ||
             ( min_sf3 <= sf3   && sf3 <= max_sf3 ) )
        {
            return true;
        }
        return false;
    }
);

$(document).ready(function() {
    var table = $('#drivers').DataTable();

    // Event listener to the two range filtering inputs to redraw on input
    $('#min_rms, #max_rms, #min_size, #max_size, #min_xmax, #max_xmax, #min_qts, #max_qts, #min_svol, #max_svol, #min_sf3, #max_sf3').keyup( function() {
        table.draw();
    } );
} );