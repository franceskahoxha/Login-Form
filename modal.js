function UnSelectAll(){
  var items=document.getElementsByName('checkbox');
  for(var i=0; i<items.length; i++){
    if(items[i].type=='checkbox')
      items[i].checked=false;
  }
}

function SelectAll(){
  var items=document.getElementsByName('checkbox');
  for(var i=0; i<items.length; i++){
    if(items[i].type=='checkbox')
      items[i].checked=true;
  }
}