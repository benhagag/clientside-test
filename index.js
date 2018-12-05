var itemObj = {'name': '', 'quantity': 0, 'price': '$', 'description': ''};
var items = [
    {'name': 'Milk', 'quantity': 0, 'price': '$', 'description': ''},
    {'name': 'Coffee', 'quantity': 0, 'price': '$', 'description': ''},
    {'name': 'Pizza', 'quantity': 0, 'price': '$', 'description': ''}];
console.log(items);


// add on enter button
$(document).keypress(function(e) {
    var newItem = $("#add-item-text").val();;
    if(e.which == 13) {

        if(newItem == ''){
            alert('Item Name is Require');
        }else{
            addItem(newItem);
        }
    }
});

$(document).ready(function () {
    for (var item in items) {
        var input = ` <div class="item-area" id="${items[item]['name']}-div">
                <input type="checkbox" value="${items[item]['name']}">
                <input type="text" id="${items[item]['name']}-input-text" value="${items[item]['name']}">
                <span class="glyphicon glyphicon-remove" id="${items[item]['name']}-remove"></span>
            </div>`;
        // console.log(input);

        $(".inputs-area").append(input);
    }



    // on click add item

    $("#plus-item").click(function (e) {
        var value = $("#add-item-text").val();
        // console.log(value);
        addItem(value);
    });

// delete-item
    $(".glyphicon-remove").click(function (e) {
    var remove = $(e.target).attr('id');
    var arraySplit = remove.split("-");
    var itemName = arraySplit[0];
    console.log(remove);
    console.log(itemName);
        $( "#"+itemName+"-div").remove();

    });

});

// add item function
function addItem (value){
    itemObj['name'] = value;
    items.push(itemObj);
    console.log(items);
    // check = items[items.length-1]['name'] = value;
    // console.log(check);
    // console.log(items.length-1);

    var input = ` <div class="item-area" id="${value}-div">
                <input type="checkbox" value="${value}">
                <input type="text" id="${value}-input-text" value="${value}">
                <span class="glyphicon glyphicon-remove" id="${value}-remove"></span>
            </div>`;

    $(".inputs-area").append(input);

    localStorage.setItem("items", items);

     itemObj = {'name': '', 'quantity': 0, 'price': '$', 'description': ''};

}