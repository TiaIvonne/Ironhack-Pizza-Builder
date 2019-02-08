//Pizza builder
//$(".price li").hide();
//if I need to agree more toppings

let totalPizza = 21;

  //button green pepper
  $(".btn-green-peppers").click(function() {
    $(".green-pepper").toggle();
    $(this).toggleClass("active");
    $("#price li:nth-child(3)").toggle();
    if($(this).hasClass("active"))
      totalPizza +=1;
      else totalPizza -=1;
      $("#total").text(totalPizza );
  });

  //button mushroom
  $(".btn-mushrooms").click(function() {
    $(".mushroom").toggle();
    $(this).toggleClass("active");
    $("#price li:nth-child(2)").toggle();
      if($(this).hasClass("active"))totalPizza +=1;
      else totalPizza -=1
      $("#total").text(totalPizza );
  });

  //button pepperonni
  $(".btn-pepperonni").click(function() {
    $(".pep").toggle();
    $(this).toggleClass("active");
    $("#price li:nth-child(1)").toggle();
      if($(this).hasClass("active"))totalPizza +=1;
      else totalPizza -=1
      $("#total").text(totalPizza );
  });

  //button sauce
  $(".btn-sauce").click(function() {
    $(".sauce").toggle("sauce-white");
    $(this).toggleClass("active");
    $("#price li:nth-child(4)").toggle();
      if($(this).hasClass("active"))totalPizza +=3;
      else totalPizza -=3
      $("#total").text(totalPizza);
  });

  //button gluten free
  $(".btn-crust").click(function() {
    $(".crust").toggle("crust-gluten-free");
    $(this).toggleClass("active");
    $("#price li:nth-child(5)").toggle();
      if($(this).hasClass("active")) totalPizza +=5;
      else totalPizza -=5
      $("#total").text(totalPizza);
  });

  $(".btn-crust").trigger("click");
  $(".btn-crust").trigger("click");
     
    
  
 

  
  







