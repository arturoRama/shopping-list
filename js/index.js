
$("#addButton").on("click", function(event){
	event.preventDefault();
	let shopItem = $("#boxItem").val();
	if (shopItem != ""){
		$("#shopList").append(`
								<li>
									<div class="item">
										${shopItem}
									</div>
									<div>
										<button type="submit" class="checkButton">
											Check
										</button>
										<button type="submit" class="delButton">
											Delete
										</button>
									</div>
								</li>
			`)
	}
	$("#boxItem").val("");
})

$("#shopList").on("click" ,".checkButton", function(event){
	event.preventDefault();
	$(this).parent().parent().toggleClass("crossed");
})

$("#shopList").on("click" ,".delButton", function(event){
	event.preventDefault();
	$(this).parent().parent().remove();
})