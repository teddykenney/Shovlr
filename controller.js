/*
    we are using javascript to "ajaxify" the html content from (request.html)... 
    this means to load the html content (i.e. the requester's info) to the database w/out the need to reload the html page...
*/

// VERSION 2

$(document).ready( function(e)
{
    $('#submitButton').click( function() 
    {  
        var LName = $('#LName').val();
        var FName = $('#FName').val();
        var Phone = $('#Phone').val();
        var AreaSize = $('#AreaSize').val();
        var Street = $('#Street').val();
        var City = $('#City').val();
        var Zip = $('#Zip').val();
    });

    $.ajax
    (
        {
            type: 'POST',
            data: {LName: LName, FName: FName, Phone: Phone, AreaSize: AreaSize, Street: Street, City: City, Zip: Zip},
            url : "submitquery.php",
            success: function(result)
            {
                //$("#result").html(info);  
                alert(result);
            }

        }
    );


});

