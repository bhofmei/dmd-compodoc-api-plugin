exports.removeUnderscore = function(option){
  var tmp=option.fn(this);
  return tmp.replace(/_/g, ' ');
}