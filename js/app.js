var start = 0;
var end = 10;
var list =$('.student-list li').hide();
var pages =$('.student-list li').length/10;
$(`.student-list li`).slice(start,end).show();
for(var i = 0;i<pages;i++){
  $('.pagination ul').append(`<li>
    <a class='' href="#">${i+1}</a>
  </li>`);
}

//setup initial page for pagination buttons
var page= 0;
$(`.pagination li`).eq(page).children().addClass('active');

$(document).ready(function(){

  //click handlers for pages buttons
  $('.pagination li').on('click',(e)=>{
    e.preventDefault();
    $('#searchInput').val('');
    $('.student-list li').slice(start,end).hide();
    end = $(e.target).text() *10;
    start = end-10;
    $(`.student-list li`).slice(start,end).show();
    $(`.pagination li`).eq(page).children().toggleClass('active');
    page = $(e.target).text() - 1;
    $(`.pagination li`).eq(page).children().toggleClass('active');


  });



});
function search (){

  //setup variables
  var ul, li, h3, input, i, filter;
  input = document.getElementById('searchInput');
  filter = input.value.toLowerCase();
  ul = document.getElementById('studentUL');
  li = ul.getElementsByTagName('li');

  //loop through list elements show if they match, hide if they don't
  for(i=0;i<li.length;i++){
    h3=li[i].getElementsByTagName('h3')[0];
    if(h3.innerHTML.toLowerCase().indexOf(filter)>-1){
      li[i].style.display = '';
    }else{
      li[i].style.display ='none';
    }
  }
}
