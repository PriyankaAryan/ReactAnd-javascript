var arrColor=[];
 var arrDescription = [];
 var rowCount = 0;
$('#LstColor').change(()=>{
    var colorSelected = $('#LstColor').val();
    rowCount = rowCount+1;
    
 if(colorSelected != 'Select the color of the SKU' )
    {
     $('#TblColor').append('<tr><td><input type="button" id="myButton" value=" X  "></td><td>'+ colorSelected +'</td><td><input id="Description'+rowCount+'"type="text"></td></tr>');     
        arrColor.push(colorSelected);
        $('#LstColor').val('Select the color of the SKU');

        $(document).on("click", "#myButton", function(event) {
            // confirm("Do you want to delete?");
            $(this).closest('tr').remove();  
               
        });

    }
  });

 $('#BtnSave').click(()=>{
     for(var i=rowCount;i<=rowCount;i++)
     {
         arrDescription.push(
         $('#Description'+i).val());
         console.log(arrColor[i-1]+"=>"+arrDescription[i-1]);
          }
})




