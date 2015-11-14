(function() {
	var drag_item_id = null;
	var drop_item_id = null;
	$(document).on("dragstart", ".title", function() {
		drag_item_id = $(this).attr("item_id");
		console.log( {drag_item_id} );
	});
	
	// $(document).on("drag", function() {
	// 	console.log( "drag :", $(this) );
	// });
	$(document).on("dragenter", ".title", function(e) {
		$(this).addClass("over");
		drop_item_id = $(this).attr("item_id");
		console.log( "dragenter :", $(this), e );
	});
	$(document).on("dragleave", ".title", function(e) {
		$(this).removeClass("over");
		console.log( "dragleave :", $(this), e );
	});
	// $(document).on("dragover", function() {
	// 	console.log( "dragover :", $(this) );
	// });
	$(document).on("dragend", ".title", function(e) {
		dragoverStyleReset();
		console.log( "dragend :", $(this), e );
		var m = drag_item_id + "を" + drop_item_id + "にいれますか？";
		if ( confirm(m) ) {
			$(this).remove();
		}
	});
	function dragoverStyleReset() {
		$(".title").removeClass("over");
	}
	$(document).on("dragover", function(e) {
		if ( e.preventDefault ) {
			e.preventDefault();
		}
	});
	$(document).on("drop", function(e) {
		e.preventDefault();
		dragoverStyleReset();
		console.log( "drop :", $(this), e );
	});
})();
