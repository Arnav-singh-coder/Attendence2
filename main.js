var name_array=[];
function submit(){
    var display_names=[];

    for(var j=1; j<=4; j++){
        var name_1=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_1);
    name_array.push(name_1)  ;  }

console.log(name_array);
var length_name=name_array.length;
console.log(length_name);
for(var k=0; k<length_name; k++){
    display_names.push("<h4>name - "+name_array[k]+"</h4>")
    console.log(display_names);


}
console.log(display_names);
document.getElementById("display_name_with_commas").innerHTML=display_names;
document.getElementById("display_name_without_commas").innerHTML=display_names.join(" ");
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";


}

function sort(){
    name_array.sort();
    console.log(name_array);
    var display_name_sort=[];
var length_name=name_array.length;
console.log(length_name);
for(var k=0; k<length_name; k++){
    display_name_sort.push("<h4>name - "+name_array[k]+"</h4>")
    console.log(display_name_sort);


}
console.log(display_name_sort);
document.getElementById("display_name_with_commas").innerHTML=display_name_sort;
document.getElementById("display_name_without_commas").innerHTML=display_name_sort.join(" ");


}
