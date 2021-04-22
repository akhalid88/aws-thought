const { v4: uuidv4 } = require('uuid');

const params = fileName => {
	const myFile = fileName.originalname.split('.');
	const fileType = myFile[myFile.length - 1];

	const imageParams = {
		Bucket: 'user-images-06d5b704-5249-4147-80b9-9e82fb926f5e',
		Key: `${uuidv4()}.${fileType}`,
		Body: fileName.buffer
	};

	return imageParams;
};

module.exports = params;