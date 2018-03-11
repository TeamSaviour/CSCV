

$(document).ready(function(){
  var i=0;

$("#add").click(function(){
  var one=$("#one").val();
  var two=$("#two").val();
  var three=$("#three").val();
  var four=$("#four").val();
  var fifth=$("#fifth").val();
  var sixth=$("#sixth").val();
  var seventh=$("#seventh").val();
  var eighth=$("#eighth").val();
  var ninth=$("#ninth").val();
  var tenth=$("#tenth").val();
  //window.alert("Akshay"+one+two+three+four+fifth+sixth+seventh+eighth+ninth+tenth);

           $('#addr'+i).html("<td>"+ (i+1)
           +"</td><td>"+one
           +"</td><td>"+two
           +"</td><td>"+three
           +"</td><td>"+four

           +"</td><td>"+fifth
           +"</td><td>"+sixth
           +"</td><td>"+seventh
           +"</td><td>"+eighth
           +"</td><td>"+ninth
           +"</td><td>"+tenth
           +"</td>");

                $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
                i++;
       });



});
