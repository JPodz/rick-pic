exports.handler = async (event, context) => {
    const pics = [
        'https://s3-us-west-2.amazonaws.com/rickpic/rick2.jpg',
        'https://s3-us-west-2.amazonaws.com/rickpic/rick3.jpg',
        'https://s3-us-west-2.amazonaws.com/rickpic/rick4.jpg',
        'https://s3-us-west-2.amazonaws.com/rickpic/rick5.jpg',
        'https://s3-us-west-2.amazonaws.com/rickpic/rick6.jpg'
    ];

    const pic = pics[ Math.floor(Math.random() * pics.length) ];

    return {
        statusCode: 200,
        body: JSON.stringify({
            "text": '/rickpic',
            "response_type": "in_channel",
            "attachments": [
                {
                    "image_url": pic,
                    "thumb_url": pic,
                    "ts": new Date().getTime()
                }
            ]
        })
    }
};