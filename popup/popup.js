// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let focuss = document.getElementById('focusbutton');
let focusss = document.getElementById('stopbutton');
let focussss = document.getElementById('fullfocusbutton');

focuss.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 
		  "document.getElementsByClassName('ya-Toolbar')[0].style.display = 'block'; var x = document.getElementsByClassName('top-panel-container'); var i; for (i = 0; i < x.length; i++) { x[i].style.display = 'none';}"

		});
	});
};

focusss.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 
		  "document.getElementsByClassName('ya-Toolbar')[0].style.display = 'block'; var x = document.getElementsByClassName('top-panel-container'); var i; for (i = 0; i < x.length; i++) { x[i].style.display = 'block';}"

		});
	});
};

focussss.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 
		  "document.getElementsByClassName('ya-Toolbar')[0].style.display = 'none'; var x = document.getElementsByClassName('top-panel-container'); var i; for (i = 0; i < x.length; i++) { x[i].style.display = 'none';}"

		});
	});
};
