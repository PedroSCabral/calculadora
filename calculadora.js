function calculadora_de_alcance(valor_investido){
    var quantidade_de_pessoas = 0;
    var quantidade_de_clicks = 0;
    var quantidade_de_compartilhamento = 0;
    var quantidade_novas_visualizacoes = 0;
    var compartilhamento_em_sequencia = 0;
    var total = 0;
    
    quantidade_de_pessoas = valor_investido * 30
    quantidade_de_clicks = quantidade_de_pessoas * 0.12
    quantidade_de_compartilhamento = quantidade_de_clicks * 0.15
    quantidade_novas_visualizacoes = quantidade_de_compartilhamento * 40
    compartilhamento_em_sequencia = quantidade_novas_visualizacoes * 3
    total = quantidade_de_pessoas += compartilhamento_em_sequencia;
    
    console.log ('total:' + total)
    }
    
    calculadora_de_alcance()