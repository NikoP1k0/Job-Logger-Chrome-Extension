function getJobInfo() {
    // Job title
    let jobTitle = document.querySelector('h1.t-24.t-bold.inline')?.innerText || '';

    // Company name
    let company = document.querySelector('a[data-test-app-aware-link]')?.innerText || '';

    // City: get the first span in the primary description container
    let city = '';
    const descContainer = document.querySelector('.job-details-jobs-unified-top-card__primary-description-container');
    if (descContainer) {
        const firstSpan = descContainer.querySelector('span.tvm__text.tvm__text--low-emphasis');
        if (firstSpan && firstSpan.innerText.includes(',')) {
            city = firstSpan.innerText.split(',')[0].trim();
        }
    }

    const date = new Date().toISOString().split('T')[0];
    return { jobTitle, company, location: city, date };
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "GET_JOB_INFO") {
        sendResponse(getJobInfo());
    }
});