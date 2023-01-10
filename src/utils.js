// Misc utilities

// Accepts a JS Date() timestamp and returns a pretty printed date
export const prettyDateFromTimestamp = (timestamp) => {
	const D = new Date(timestamp);
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	return `${monthNames[D.getMonth()]} ${D.getDate()}, ${D.getFullYear()}`;
};

export const parseHTML = (function() {
	var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		// We have to close these tags to support XHTML (#13200)
		wrapMap = {
			// Support: IE9
			option: [1, "<select multiple='multiple'>", "</select>"],

			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

			_default: [0, "", ""]
		};

	/**
	 * @param {String} elem A string containing html
	 * @param {Document} context
	 */
	return function parseHTML(elem, context) {
		context = context || document;

		var tmp, tag, wrap, j,
			fragment = context.createDocumentFragment();

		if (!rhtml.test(elem)) {
			fragment.appendChild(context.createTextNode(elem));

			// Convert html into DOM nodes
		} else {
			tmp = fragment.appendChild(context.createElement("div"));

			// Deserialize a standard representation
			tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
			wrap = wrapMap[tag] || wrapMap._default;
			tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];

			// Descend through wrappers to the right content
			j = wrap[0];
			while (j--) {
				tmp = tmp.lastChild;
			}

			// Remove wrappers and append created nodes to fragment
			fragment.removeChild(fragment.firstChild);
			while (tmp.firstChild) {
				fragment.appendChild(tmp.firstChild);
			}
		}

		return fragment;
	};
}());
