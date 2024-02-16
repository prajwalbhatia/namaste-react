### Note
JSX is not HTML in JavaScript. JSX and HTML are different. We can say JSX is HTML-like syntax.

JS code is transpiled before it reaches the browser. The code is transpiled by Parcel, but Parcel does not do the transpilation on its own; it hands it over to another package named Babel.

JSX -> Create Element -> React Element JS Object -> HTML Element

JSX is so powerful that it helps to secure our app from cross-scripting attacks. So let's say any malicious data comes from an API, we execute that data. Normally, it would have been dangerous, but JSX has taken care of that.
