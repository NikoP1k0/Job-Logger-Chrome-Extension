document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: "GET_JOB_INFO"}, function(response) {
      console.log('Job info response:', response);
      if (response) {
        document.getElementById('jobTitle').value = response.jobTitle || '';
        document.getElementById('company').value = response.company || '';
        document.getElementById('location').value = response.location || '';
        document.getElementById('date').value = response.date || '';
      }
    });
  });
  
  var logBtn = document.getElementById('loggingButton');
  if (logBtn) {
    logBtn.addEventListener('click', function() {
      document.getElementById('helloSection').style.display = 'none';
      document.getElementById('formSection').style.display = 'block';
    });
  }
});
