
function hide(){

  for (var i = 0; i < arguments.length; i++) {

    var input = arguments[i];
$('#'+input).addClass('hide'); //jquery way
}
}

function show(){

  for (var i = 0; i < arguments.length; i++) {

    var input = arguments[i];
    $('#'+input).removeClass('hide');
    $('#'+input).show();
  }
}

/**
Report a post in property details page
*/
$(document).ready(function () {

  $("#report_post_btn").on('click', function(e){
    e.preventDefault();

    var reason_for_report = $("#reason_for_report").val(); 
    var phone = $("input[name='report_phone']").val();
    var property_id = $("input[name='property_id']").val();
    var email = $("input[name='report_email']").val();
    var message = $("#report_post_message").val();

    $.ajax({
      url: "/report-property",
      type:'POST',
      data: { reason_for_report:reason_for_report, phone:phone, email:email, message:message,property_id:property_id},
      success: function(data) {
        if($.isEmptyObject(data.error)){

          printSuccessMsg(data.success);
        }
        else{

          printErrorMsg(data.error);
        }
      }
    });
  });


  function printErrorMsg (msg) {
    $(".print-error-msg").find("ul").html('');
    $(".show_report_success").css('display','none');

    $(".print-error-msg").css('display','block');
    $.each( msg, function( key, value ) {
      $(".print-error-msg").find("ul").append('<li>'+value+'</li>');
    });
  }

  function printSuccessMsg (msg) {
    $(".show_report_success").find("ul").html('');
    $(".print-error-msg").css('display','none');
    $(".show_report_success").css('display','block');

    $(".show_report_success").find("ul").append('<li>'+msg+'</li>');
  }

/**
Share a property via email in property details page
*/

$("#emailShareBtn").on('click', function(e){
  e.preventDefault();

  var user_name = $("input[name='user_name_email_share']").val();
  var youremail = $("input[name='youremail_email_share']").val();
  var receiveremail = $("input[name='receiveremail_email_share']").val();
  var content = $("#content__email_share").val();

  $.ajax({
    url: "/share-property-via-email",
    type:'POST',
    data: { receiveremail:receiveremail, content:content, youremail:youremail, user_name:user_name},
    success: function(data) {
      if($.isEmptyObject(data.error)){

        printSuccessMsgEmailShare(data.success);
      }
      else{

        printErrorMsgEmailShare(data.error);
      }
    }
  });
});


function printErrorMsgEmailShare (msg) {
  $(".emailShareErrorMsg").find("ul").html('');
  $(".emailShareSuccessMsg").css('display','none');

  $(".emailShareErrorMsg").css('display','block');
  $.each( msg, function( key, value ) {
    $(".emailShareErrorMsg").find("ul").append('<li>'+value+'</li>');
  });
}

function printSuccessMsgEmailShare (msg) {
  $(".emailShareSuccessMsg").find("ul").html('');
  $(".emailShareErrorMsg").css('display','none');
  $(".emailShareSuccessMsg").css('display','block');

  $(".emailShareSuccessMsg").find("ul").append('<li>'+msg+'</li>');
}

/**
contact seller in property details page
*/
$("#contactSellerBtn").on('click', function(e){
  e.preventDefault();

  var yourname = $("input[name='yourname_contact']").val();
  var youremail = $("input[name='youremail_contact']").val();
  var yourphone = $("input[name='yourphone_contact']").val();
  var seller_email = $("input[name='seller_email_contact']").val();
  var content = $("#content_contact").val();

  $.ajax({
    url: "/contact-seller",
    type:'POST',
    data: { seller_email:seller_email, content:content, youremail:youremail, yourname:yourname , yourphone:yourphone_contact},
    success: function(data) {
     if($.isEmptyObject(data.error)){

       printSuccessMsgContactSeller(data.success);
     }
     else{

      printErrorMsgContactSeller(data.error);
    }
  }
});
});


function printErrorMsgContactSeller (msg) {
  $(".contactSellerErrorMsg").find("ul").html('');
  $(".contactSellerSuccessMsg").css('display','none');

  $(".contactSellerErrorMsg").css('display','block');
  $.each( msg, function( key, value ) {
    $(".contactSellerErrorMsg").find("ul").append('<li>'+value+'</li>');
  });
}

function printSuccessMsgContactSeller (msg) {
 $(".contactSellerSuccessMsg").find("ul").html('');
 $(".contactSellerErrorMsg").css('display','none');
 $(".contactSellerSuccessMsg").css('display','block');

 $(".contactSellerSuccessMsg").find("ul").append('<li>'+msg+'</li>');
}


});
