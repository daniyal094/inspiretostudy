const withImages = require('next-images');
module.exports = withImages({
    webpack(config, options) {
        return config
    }
});

const withVideos = require('next-videos')

module.exports = withVideos({

    webpack(config, options) {
        return config
    }
}
)