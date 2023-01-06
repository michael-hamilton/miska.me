// Misc utilities

// Accepts a JS Date() timestamp and returns a pretty printed date
export const prettyDateFromTimestamp = (timestamp) => {
	const D = new Date(timestamp);
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	return `${monthNames[D.getMonth()]} ${D.getDate()}, ${D.getFullYear()}`;
};
