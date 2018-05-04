exports.apiMethodIcon = function (options) {
  var apiType = options.fn(this);
  var lType = apiType.toLowerCase();
  var backColor;
  // acceptable methods: GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, CONNECT, PATCH
  // POST: #49cc90 or #10a54a
  // PUT: #fca130 or #C5862B
  // GET: #61affe or #0F6AB4
  // DELETE: #f93e3e or #A41E22
  // PATCH: #50e3c2 or #D38042
  // HEAD: #9012fe or #FFD20F or #862bc5
  // OPTIONS: #0d5aa7 or #007681 or #1ea4a0
  switch (lType) {
    case 'get':
      backColor = '#0F6AB4';
      break;
    case 'post':
      backColor = '#10a54a';
      break;
    case 'put':
      backColor = '#C5862B';
      break;
    case 'delete':
      backColor = '#A41E22';
      break;
    case 'patch':
      backColor = '#D38042';
      break;
    case 'head':
      backColor = '#862bc5';
      break;
    case 'options':
      backColor = '#1ea4a0';
      break;
    default:
      backColor = '#9a9a9a'
  } // end switch
  var upperCase = apiType.toUpperCase();
  var out = '<span class="modifier" style="background:' + backColor + ';margin-right:10px;">' + upperCase + '</span>';
  return out;
  //return new Handlebars.SafeString(out)
}
