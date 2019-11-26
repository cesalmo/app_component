const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './page1/page1scripts.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         }
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, '/index.html' ),
         filename: 'index.html'
      })
   ]
};