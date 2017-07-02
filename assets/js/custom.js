$(function() {
        $(".pop").click(function(){
          var name = $(this).attr('name');
          var value = $(this).attr('value');
          $(".modal .modal-title").html(name);
          $(".modal .modal-body").html("Content loading please wait...");
          $(".modal").modal("show");
          $(".modal .modal-body").load(value);
        });
  });
		
    