/**
 * @param  {object} cooking - add, remove, _userConfig and config
 * @param  {*} options - custom option
 */
module.exports = function (cooking, options) {
  cooking.config.postcss = (cooking.config.postcss || []).concat([require('autoprefixer')(options || {})])
  cooking.add('vue.autoprefixer', false)
}
