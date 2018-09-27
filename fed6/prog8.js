var users=[{"firstName":"amit", "last Name":"srivatsa", "age":"22"},
 {"firstName":"anirudh", "last Name":"ritti", "age":"24"}]
users.forEach(function(item){
  $('tbody').append('<tr><td>'+item["firstName"]+'</td><td>'+item["last Name"]+'</td><td>'+item["age"]+'</td></tr>')
});