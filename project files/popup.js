document.addEventListener('DOMContentLoaded', function() {
  var logBtn = document.getElementById('loggingButton');
  if (logBtn) {
    logBtn.addEventListener('click', function() {
      document.getElementById('helloSection').style.display = 'none';
      document.getElementById('formSection').style.display = 'block';
    });
  }
});
