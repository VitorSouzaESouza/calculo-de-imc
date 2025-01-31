$(function(){
    $('#input_calc').click(function(){

        $('#alert1').remove()
        $('#alert2').remove()
        $('#div_weight').css('border-color', 'black').css('border-width', '1px')
        $('#div_height').css('border-color', 'black').css('border-width', '1px')

        if($('#input_weight').val() > 0  && $('#input_height').val() > 0){

            var weight = parseFloat($('#input_weight').val());
            var height = parseFloat($('#input_height').val());
            var ans = weight/(height*height)
            ans = ans.toFixed(1)

            var result = 'Seu IMC é ' + String(ans)
            if(ans<18.5){
                result += ', abaixo do peso'
                $('#div_result').css('background-color', 'rgb(150,0,0)')
            }
            else if(ans>=18.5 & ans<24.9){
                result += ', peso normal'
                $('#div_result').css('background-color', 'rgb(0,150,0)')
            }
            else if(ans>=25 & ans<29.9){
                result += ', acima do peso'
                $('#div_result').css('background-color', 'rgb(150,0,0)')
            }
            else{
                result += ', obeso'
                $('#div_result').css('background-color', 'rgb(150,0,0)')
            }
            $('#div_result').text(result)
        }
        else{
            if($('#input_weight').val() <= 0){
                $('#div_weight').css('border-color', 'red').css('border-width', '5px').before('<p id=alert1 style="color:red; font-size:20px">Insira um peso maior que 0</p>')
            }
    
            if($('#input_height').val() <= 0){
                $('#div_height').css('border-color', 'red').css('border-width', '5px').before('<p id=alert2 style="color:red; font-size:20px">Insira uma altura maior que 0</p>')
            }
        }

        })
})
