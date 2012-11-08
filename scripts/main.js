require.config({
  shim: {
  },
  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    jquery: ['http://code.jquery.com/jquery-latest.min', 'vendor/jquery.min'],
    'jquery.ui.widget': 'vendor/jquery.ui.widget',
    fileupload_iframe: 'vendor/jquery.iframe-transport',
    fileupload: 'vendor/jquery.fileupload',
  }
});
 
require(['app'], function(app) {
  
});