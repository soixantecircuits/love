define(['fileupload', 'fileupload_iframe', 'jquery.ui.widget'], function() {
  $(function() {

    $(document).bind('dragover', function (e) {
    var dropZone = $('#love'),
        timeout = window.dropZoneTimeout;
    if (!timeout) {
        dropZone.addClass('in');
    } else {
        clearTimeout(timeout);
    }
    if (e.target === dropZone[0]) {
        dropZone.addClass('hover');
    } else {
        dropZone.removeClass('hover');
    }
    window.dropZoneTimeout = setTimeout(function () {
        window.dropZoneTimeout = null;
        dropZone.removeClass('in hover');
    }, 100);
});
    $('#fileupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: 'server/php/'
    });

    $('#fileupload').fileupload({
      dataType: 'json',
      dropZone: $('#love'),
      acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
      add: function(e, data) {
        data.context = $('<p/>').text('Uploading...').appendTo(document.body);
        console.log(data);
        data.submit();
      },
      done: function(e, data) {
        $.each(data.result, function(index, file) {
          $('<p/>').text(file.name).appendTo(document.body);
        });
      },
      progressall: function(e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        $('#progress .bar').css('width', progress + '%');
      }
    });
  });
});