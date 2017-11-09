$(document).ready(function() {
    $('.drivers').DataTable();
} );

$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = parseInt( $('#min').val(), 10 );
        var max = parseInt( $('#max').val(), 10 );
        var rms_power = parseFloat( data[7] ) || 0; // use data for the rms_power column

        if ( ( isNaN( min ) && isNaN( max ) ) ||
             ( isNaN( min ) && rms_power <= max ) ||
             ( min <= rms_power   && isNaN( max ) ) ||
             ( min <= rms_power   && rms_power <= max ) )
        {
            return true;
        }
        return false;
    }
);

$(document).ready(function() {
    var table = $('#drivers').DataTable();

    // Event listener to the two range filtering inputs to redraw on input
    $('#min, #max').keyup( function() {
        table.draw();
    } );
} );