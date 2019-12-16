function color() {
    var hexcolor = document.getElementById('color-picker').value;
    document.getElementById('colorhex').innerHTML = hexcolor;
    document.getElementById('Path_4').style.fill = hexcolor;
}

var slider = document.getElementById('myRange');
var outsize = slider.value;
var output = document.getElementById('demo');

output.innerHTML = outsize;

var path = document.getElementById('monitor').setAttribute('width', outsize).innerHTML;


slider.oninput = function() {
  output.innerHTML = this.value;
}








// function size() {
//     var widthsize = document.getElementById('myRange').value;
//     console.log(widthsize);
// }


// var color = document.getElementById('color-picker').value;

// document.getElementById('Path_4').style.fill = color;


// console.log(color);