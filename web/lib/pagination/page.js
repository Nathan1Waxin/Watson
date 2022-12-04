var addNumeration = function(cl){
    var table = $('table.' + cl)
    var trs = $('tr')
    var counter = 1
    
    Array.prototype.forEach.call(trs, function(x,i){
      var firstChild = x.children[0]
      if (firstChild.tagName === 'TD') {
        var cell = document.createElement('td')
        cell.textContent = counter ++
        x.insertBefore(cell,firstChild)
      } else {
        firstChild.setAttribute('colspan',2)
      }
    })
  }
  
  addNumeration("data_links")

$(document).ready(function(){
    $('#data_links').after('<div id="nav"></div>');
    var rowsShown = 4;
    var rowsTotal = $('#data_links tbody tr').length;
    var numPages = rowsTotal/rowsShown;
    for(i = 0;i < numPages;i++) {
        var pageNum = i + 1;
        $('#nav').append('<a href="#" rel="'+i+'">'+pageNum+'</a> ');
    }
    $('#data_links tbody tr').hide();
    $('#data_links tbody tr').slice(0, rowsShown).show();
    $('#nav a:first').addClass('active');
    $('#nav a').bind('click', function(){

        $('#nav a').removeClass('active');
        $(this).addClass('active');
        var currPage = $(this).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#data_links tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
                css('display','table-row').animate({opacity:1}, 300);
    });
});

$(document).ready(function(){
    $('#data_users').after('<div id="nav"></div>');
    var rowsShown = 4;
    var rowsTotal = $('#data_users tbody tr').length;
    var numPages = rowsTotal/rowsShown;
    for(i = 0;i < numPages;i++) {
        var pageNum = i + 1;
        $('#nav').append('<a href="#" rel="'+i+'">'+pageNum+'</a> ');
    }
    $('#data_users tbody tr').hide();
    $('#data_users tbody tr').slice(0, rowsShown).show();
    $('#nav a:first').addClass('active');
    $('#nav a').bind('click', function(){

        $('#nav a').removeClass('active');
        $(this).addClass('active');
        var currPage = $(this).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#data_users tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
                css('display','table-row').animate({opacity:1}, 300);
    });
});
