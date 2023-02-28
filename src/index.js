const axios   = require('axios');

module.exports = async (link) => {
  const
    headers = {
      "User-Agent": "PostmanRuntime/7.31.1",
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, deflate, br"
    },
    res     = await axios.post('https://reelit.io/api/fetch', { url : link }, { headers });

    try {
      return {
        status: res.data.media.status,
        id: res.data.media.data.id,
        type: res.data.media.data.type,
        user: res.data.media.data.user,
        post: {
          description: res.data.media.data.mediaList[0].description,
          views: res.data.media.data.metrics.views,
          comments: res.data.media.data.metrics.comments,
          likes: res.data.media.data.metrics.likes,
        },
        media: {
          videos: res.data.media.data.mediaList[0].videos,
          images: res.data.media.data.mediaList[0].images,
          audio: res.data.media.data.mediaList[0].audio,
        },
      };
    } catch (error) {
      return res.data;
    }
}