function getJobInfo() {

     // These selectors may need to be updated if LinkedIn changes their layout
    jobTitle = document.querySelector('#pb-job-role')?.innerText || '';
    company = document.querySelector('#pb-company-name')?.innerText || '';
    location = document.querySelector('#pb-job-location')?.innerText || '';
    const date = new Date().toISOString().split('T')[0];
    return { jobTitle, company, location: city, date };
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "GET_JOB_INFO") {
        sendResponse(getJobInfo());
    }
});