export default function styleFactory(options) {
  var prefix = options.prefix || '';
  var tag =
    options.tag ||
    function (tag) {
      return tag;
    };
  var rpx = options.rpx;
  var host = options.host || 'host-placeholder';
  var css = [
    '/*注释*/.',
    prefix,
    'foo{color:red;height:',
    rpx(100) + 'px',
    '}',
  ].join('');

  return css;
}
