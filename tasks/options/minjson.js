module.exports = {
    compile: {
        files: {
            // Minify one json file
            //'one.min.json': 'one.json',
            // Concat/minify one.json and all json files within the data folder
            // If more than one json file is matched, json will be wrapped in brackets []
            //'all.min.json': ['one.json', 'data/*.json']
        }
    }
}
