$(document).ready(function () {



});


function  show_upload_button(){
  $("#upload_images").show();
}



function uploadImage(event){

  
  var formElement = document.getElementById("fileupload");
  var fd = new FormData(formElement);

$.ajax({
  url: "./events/upload-poster",
  type: "POST",
  data: fd,
  contentType: false,
  processData:false,
  xhr: function () {
    var xhr = $.ajaxSettings.xhr();

  xhr.upload.onprogress = function (evt) {
// For uploads
var percent = 0;
var position = event.loaded || event.position;
var total = event.total;
if (event.lengthComputable) {
  percent = Math.ceil(position / total * 100);
}
//update progressbar
$(" .progress_bar").css("width", + percent +"%");
$(" .pstatus").text(percent +"%");
};
return xhr;
},
success: function(data)
{
  $("#upload_img_alert").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><span class="glyphicon glyphicon-ok"></span><strong></strong> <em>Pictures uploaded succesfully</em></div>');
   
// alert(data.results  + " " + "Uploaded");
$('#loader-icon').hide();
//activate_next_step();
sessionStorage.setItem("imageUpload","true");

},

error: function(data,xhr){
 $("#upload_img_alert").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><span class="glyphicon glyphicon-exclamation-sign"></span><strong>Error!</strong> <em>Pictures not uploaded succesfully. Please upload again</em></div>');

}
});

}

