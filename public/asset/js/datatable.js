
$('#articles').dataTable( {
 "bProcessing": true,
 "bServerSide": true,
 "sAjaxSource": "admin/articlesajax",
 "aaSorting": [[ 3, "desc" ]],
 "aoColumns": [
            { 'sWidth': '60px' },
            { 'sWidth': '130px', 'sClass': 'center' },
            { 'sWidth': '180px', 'sClass': 'center' },
            { 'sWidth': '60px', 'sClass': 'center' },
            { 'sWidth': '90px', 'sClass': 'center' },
            { 'sWidth': '80px', 'sClass': 'center' },
            { 'sWidth': '80px', 'sClass': 'center' }
        ],
        "sPaginationType": "bootstrap"   
});