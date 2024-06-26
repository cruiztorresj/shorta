
// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Caleb Josue Ruiz Torres.
// May 16, 2024.

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {

	await chrome.scripting.executeScript({
		func: shorta,
		target: { tabId: tab.id }
	});
});

function shorta() {
	
	const youtube = 'https://www.youtube.com';
	const shorts = '/shorts';
	
	const actualURL = location.href;
	
	if (actualURL.startsWith(youtube) && actualURL.includes(shorts)) {
	
	let destinationURL = actualURL.replace("shorts/", "watch?v=");
	
	location = destinationURL
	
	} else {
		
		alert("This web browser extension is meant to be used while watching YouTube shorts");
	}
}

