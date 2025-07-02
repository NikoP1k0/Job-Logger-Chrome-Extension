function getJobInfo(){
    const jobTitle = document.querySelector('h1.top-card-layout__title')?.innerText || '';
    const company = document.querySelector('a.topcard__org-name-link, span.topcard__flavor')?.innerText || '';
    const location = document.querySelector('span.topcard__flavor--bullet')?.innerText || '';
    const date = new Date().toISOString().split('T')[0];

    return {jobTitle,company,location,date};
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "GET_JOB_INFO") {
    sendResponse(getJobInfo());
  }
});