
Meteor.startup(() => {
	if (window.StatusBar) {
		// needed to fix Xcode 9 / iOS 11 issue with blank space at bottom of webview
		// https://github.com/meteor/meteor/issues/9041
		StatusBar.overlaysWebView(false);
		StatusBar.overlaysWebView(true);
	}
});
