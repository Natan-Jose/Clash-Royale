window.addEventListener('beforeunload', function () {
           
    sessionStorage.setItem('usuarioSaindo', 'true');
});

window.addEventListener('focus', function () {
    
    if (sessionStorage.getItem('usuarioSaindo')) {
       
        document.title = 'Página Inicial';

        setTimeout(function () {
          
            document.title = 'Volte aqui :(';
        }, 3000);
    }
});