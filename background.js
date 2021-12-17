chrome.action.onClicked.addListener((tab) => {

    console.log(tab.url);

    if (tab.url == "https://10fastfingers.com/typing-test/english" ||
        tab.url == "http://10fastfingers.com/typing-test/english" ||
        tab.url == "https://10fastfingers.com/advanced-typing-test/english" ||
        tab.url == "http://10fastfingers.com/advanced-typing-test/english") {

        chrome.scripting.insertCSS(
            {
                target: { tabId: tab.id },
                files: ['/darkmode.css']
            },
            () => {
                console.log('Applied CSS')
            }
        );
        chrome.scripting.executeScript(
            {
                target: { tabId: tab.id },
                files: ['/content.js']
            },
            () => {
                console.log('Loaded JS')
            }
        );
    }
});