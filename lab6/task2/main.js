$(document).ready(function () {
  $.ajax({
    url: "http://dummy.restapiexample.com/api/v1/employees",
    method: "GET",
    contentType: "application/json",
  })
  .done(function(data){
    console.log(data.data);
    const employers=data.data;
    const table=$('table tbody');

    $.each(employers, function(index, element){
      const tr=$('<tr>').append(
        $('<td>').text(element.id),
        $('<td>').text(element.employee_name),
        $('<td>').text(element.employee_salary),
        $('<td>').text(element.employee_age),
      ).appendTo(table);
    });
  })
  .fail(() => {
    console.error("error");
  });
});