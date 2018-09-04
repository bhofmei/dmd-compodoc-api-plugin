exports.modifySpan = function (options) {
  var tag = options.fn(this);
  var lType = tag.toLowerCase();
  var backColor;

  switch(lType){
    case 'required':
      backColor = '#31708f';
      break;
    case 'unique':
      backColor = '#3c763d';
      break;
    case 'validate':
      backColor = '#a94442';
      break;
    case 'index':
      backColor = '#8a6d3b';
      break;
    default:
      backColor = null;
  }
  if (backColor === null){
    return '';
  } else {
    var upperCase = tag.toUpperCase();
    return '<span class="modifier" style="background:' + backColor + ';margin-right:10px;">' + upperCase + '</span>';
  }
}
