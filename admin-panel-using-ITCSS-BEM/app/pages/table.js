(function($){
   
    $defaultTable = $('#default_table')
    $('.c-colorpalet__box > .c-button').on('click',function(){
       let tableTheme =  $(this).attr('data-table-theme');
       $defaultTable.attr('class','c-table c-table--'+tableTheme);
    })

})(window.jQuery);