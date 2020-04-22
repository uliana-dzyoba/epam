jQuery.validator.addMethod("validate_email", function(value, element) {

  if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {
      return true;
  } else {
      return false;
  }
}, "Please enter a valid Email.");


$(document).ready(function () {
  const form= $("#form");
  form.validate({
    rules:{
      email:{
        required: true,
        validate_email: true
      },
      name:{
        required: true,
        minlength:2
      },
      message:{
        required: true,
      }
    },
    messages: {
      email: {
        required: "Email is required",
        validate_email: "Please enter a valid email",
      },
      name:{
        required: "Name is required",
        minlength: "Name must be more than 2 letters"
      },
      message:{
        required: "Message is required",
      }
    },
    errorElement:'div',
    submitHandler: function(form){

      let dataToSend = {};
      const inputs = $("[data-name]");
      inputs.each((key, item) => {
        dataToSend[$(item).data("name")] = $(item).val();
      });

      $.ajax({
        url: "https://petstore.swagger.io/v2/user",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(dataToSend),
      })
      .done(() => {
        console.log("success");
        $('body').load('form_sent.html');
      })
      .fail(() => {
        console.error("error");
      });
    }
  });
});

