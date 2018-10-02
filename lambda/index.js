const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event, context) => {

    const { Contents } = await s3.listObjects({ Bucket: 'rickpic' }).promise();

    const images = Contents.filter(content => content.Key.includes('.jpg'));
    const randomIndex = Math.floor(Math.random() * images.length);
    const pic = images[ randomIndex ];
    const url = `https://s3-us-west-2.amazonaws.com/rickpic/${pic.Key}`;

    return {
        statusCode: 200,
        body: JSON.stringify({
            "response_type": "in_channel",
            "attachments": [
                {
                    "image_url": url,
                    "thumb_url": url,
                    "ts": new Date().getTime()
                }
            ]
        })
    }
};