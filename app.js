






type = "text/javascript" >

    $(document).on("click", ".open-orderDialog", function () {
      const orderId = $(this).data('id');

      if (orderId ==='veg'){
        document.getElementById("img").src = "./img/asd.jpg";
        document.getElementById("price").innerHTML = "KES 1400";
        document.getElementById("type").innerHTML = "Vegetable";

        document.getElementById("total").innerHTML = "KES 1400";
        document.getElementById("s_total").innerHTML = "KES 1400";
    
      }


    });



