# Webpack Basic Project

> This project is created following www.udemy.com/learn-webpack-2-from-scratch/

> Use 'yarn run build'


# Useful Loaders

CSS Loaders / Sass Loader / Babel
- Bundle css files

PostCSS with Webpack
  - [PostCSS Loader](https://webpack.js.org/loaders/postcss-loader/)
  - [Autoprefixer](https://github.com/postcss/autoprefixer)
  - [Autoprefixer Browserslist](https://github.com/ai/browserslist#queries)
  - [Rucksack](https://www.rucksackcss.org/)
  - [Lost](http://lostgrid.org/)
  - [CSS Nano](http://cssnano.co/)

Exporting CSS to a seperate file instead of in the js file
  - [Extract Text Webpack Plugin](https://webpack.js.org/plugins/extract-text-webpack-plugin/)
  
Source Map - help debug
  - Give hints about which file causes the bug
  - Chrome developer tool will show original files
  - Just pass webpack different configurations
  
Multiple bundles of files 
    - Change entry point and output files
    - html-webpack-plugin: auto generate index.html and its reference
    - clean-webpack-plugin: clean 

Webpack Dev Server:
- Watch both js and css file

Broswersync:
- View website on multiple browser of different devices
- have a live website to test website with different browsers

Multiple html file:
- Use multiple htmlWebpackPlugins with different configuraitons
