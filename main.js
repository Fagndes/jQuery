$('#adicionar').click(function(){
    $('form').slideDown(400);        
})
$(document).ready(function(){
$('form').on('submit', function(e){    
    e.preventDefault();
    const nomeTarefa = $('#nome-tarefa').val();

    if(nomeTarefa) {//
        const adicionarElemento = $('<li></li>').text(nomeTarefa);
        adicionarElemento.click(function(){
            $(this).css('text-decoration', 'line-through');
        });
        $('ul').append(adicionarElemento);
        $('#nome-tarefa').val('');
    }
   

});
});

