module.exports= {
	entry:'./js/app.js',
	output:{filename:'./dist/index.js'},
	module:{
		loaders:[{
			test:/\.css$/,
			loader:'style!css'
		}]
	}	
}