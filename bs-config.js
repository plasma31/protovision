{ 
    injectChanges: true;
    files: [ './**/*.{html,htm,css,js}' ];
    watchOptions : { ignored: 'node_modules' };
    server: 
    { baseDir : './dist'} 
}