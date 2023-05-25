// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'submitApplication') {
      // Fetch the required fields from the website's DOM and fill them with data
      const resumeWallet = document.querySelector('#resume-wallet');
      // Retrieve other required fields and populate them
  
      // Submit the application form
      const submitButton = document.querySelector('#submit-button');
      submitButton.click();
    }
  });
  ``
  