$(document).find(".input-list").each(function() {		
		
		var MinInputs		= $(this).data("minItems") || 1;
		var MaxInputs       = $(this).data("maxItems") || 0;
		var InputsWrapper   = $(this); //Input boxes wrapper ID
		
		var x = InputsWrapper.find(".input-list-item").length; //initlal text box count
		var FieldCount=1; //to keep track of text box added
		
		function add_remove_item_click_trigger(item) {
			console.log("Min: " + MinInputs);
			console.log("Max: " + MaxInputs);
			$(item).find(".removeitem").click(function(e) {
					$(this).closest(".input-list").find(".input-list-add-button").each(function (e) {
								$(this).show();
							});				
					if( x > MinInputs ) {
						$(this).parent('div').remove(); //remove text box                
						x--; 
					}
				})
		};
		
		function hide_add_button(item) {
			$(item).find(".input-list-add-button").each(function (e) {
						$(this).hide();
					})
		}

		$(InputsWrapper).find(".input-list-add-button").click(function (e)  //on add input button click
		{
				FieldCount++; //text box added increment
				//add input box	
				input_name = $(InputsWrapper).attr('name') + "[]"
				new_input = $(InputsWrapper).find(".input-list-item:last").clone();				
				$(new_input).find("input").each(function(index) {
					$(this).val("")
						.attr('id', "item_" + FieldCount + "_" + index)
						.attr('name', input_name);
				});
				add_remove_item_click_trigger(new_input);
				
				$(new_input).insertAfter($(InputsWrapper).children(".input-list-item:last"))
				x++; 
				if (x >= MaxInputs && MaxInputs > 0) {
					hide_add_button(InputsWrapper);
					}
				}
		);

		add_remove_item_click_trigger(InputsWrapper);
});