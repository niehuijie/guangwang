"use strict";
module.exports=function(grunt){
	require("load-grunt-tasks")(grunt);
	require("time-grunt")(grunt);
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		jshint:{
			options:{
				jshintrc:'.jshintrc',
			},
			scripts:{
				files:{
					src:['src/js/*.js']
				}
			},
			gruntfile:{
				files:{
					src:['Gruntfile.js']
				}
			}
		},
		csslint:{
			options:{
				csslintrc: '.csslintrc'
			},
			styles:{
				src:['src/css/*.css']
			}
		},
		htmlhint:{
			options:{
				htmlhintrc:".htmlhintrc"
			},
			html1:{
				src: ['src/*.html']
			}
		},
		imagemin:{
			options: {
				optimizationLevel: 3,
			},
			build: {
				files: [{
					expand: true,
					cwd: 'src/images/',
					src: '*.{jpg,png,gif}',
					dest: 'dist/images/'
				}]
			}
		},
		autoprefixer:{
			options: {
				browsers: ['> 1%', 'last 45 versions','Firefox >=20']
			},
			dist: {
				src: 'src/css/*.css'
			}
		},
		sass: {
			options: {
				style: 'expanded',
				noCache: true,
				sourcemap: 'none',
				compass: true
			},
			complies: {
				files: [{
					expand: true,
					cwd: 'src/sass/',
					src: '*.scss',
					dest: 'src/css/',
					ext: ".css",
					extDot: 'first'
				}]
			}
		},
		// sprite:{
	 //      all: {
	 //        src:['src/images/sprite/*.png'],
	 //        dest:'src/images/spritefoot.png',
	 //        destCss:'src/sass/sprites.scss',
	 //        cssTemplate:'./handlebarsInheritance.scss.handlebars' 
	 //      }
		// },
		copy:{
			scripts:{
				files: [{
					expand: true,
					cwd: 'src/js/',
					src: '**/*',
					dest: 'dist/js/',
				}]
			},
			sprimg:{
				files: [{
					expand: true,
					cwd: 'src/images/sprite',
					src: '*.{png,jpg,gif}',
					dest: 'dist/images/sprite/',
				}]
			},
			html:{
				files: [{
					expand: true,
					cwd: 'src/',
					src: '*.html',
					dest: 'dist/',
				}]
			},
		},
		clean: {
			dist: {
				src: ['dist/js/*.js','dist/css/*']
			},
			css:{
				src: ['dist/css/*']
			}
		},
		useminPrepare:{
			html:"src/*.html",
			options:{
				flow:{
					html:{
						steps:{
							js:['concat','uglify'],
							css:['concat','cssmin']
						},
						post: {
					        js: [{
						          name: 'uglify',
						          createConfig: function (context) {
						            var generated = context.options;
						            generated.options = {
						              banner: '/*<%= pkg.name %> js <%= grunt.template.today("yy-mm-dd") %> <%= pkg.author %>*/',
						              mangle: {
								        reserved: ['jQuery', 'Backbone','$','Zepto']
								      },
								      compress:{
								      	drop_debugger:false,
								      	drop_console:false
								      },
								      beautify: false
						            };
						          }
						    }]
					    }
					}
				}
			}
		},
		filerev:{
			options: {
				algorithm: 'md5',
				length: 16
			},
			scripts: {
				src: ['dist/js/*.js'],
			},
			style:{
				src:['dist/css/*.css'],
			}
		},
		usemin: {
		  html: 'dist/*.html',
		  options:{
		  	assetDirs:['dist/']
		  }
		},
		bower:{
			options:{
				copy:true,
				install:true,
				cleanTargetDir:true,
				verbose:true,
				prune:false,
				layout:'byType',
				cleanBowerDir: false,
				bowerOptions: {}
			},
			installJs:{
				options:{
					targetDir:'./dist/js/lib',
				}
			}
		},
		connect: {
		    server: {
		      options: {
		        port: 8077,
		        hostname: 'localhost',
		        base:'./dist/',
		        open:true,
		        livereload:true,
		        directory:'./dist/'
		      }
		    }
		},
		concurrent:{
			target1: ['sass'],
			options: {
				logConcurrentOutput: true
			}
		},
		watch:{
			configFiles:{
				files:['Gruntfile.js'],
				options:{
					reload:true,
				},
				tasks:['jshint:gruntfile']
			},
			livereload:{
				options:{
					livereload:true,
				},
				files:['<%= usemin.html %>']
			},
			styles:{
				files:['src/sass/*.scss'],
				tasks:['complies','csslint:styles','clean:dist','copy:html','useminhtml']
			},
			scripts:{
				files:['src/js/*.js'],
				tasks:['jshint:scripts']
			},
			html:{
				files:['src/*.html'],
				tasks:['htmlhint']
			},
			images:{
				files:['src/images/*.{png,jpg,gif}'],
				tasks:['newer:imagemin:build']
			},
			sprimg:{
				files:['src/images/sprite*/*'],
				tasks:['sprite','useminhtml']
			},
			useminhtml:{
				files:['src/js/*.js','src/*.html'],
				tasks:['clean:dist','copy:html','useminhtml']
			}
		}
	});
	grunt.registerTask('complies',['sass','autoprefixer']);
	grunt.registerTask('hint',['jshint:scripts','csslint:styles','htmlhint:html1']);
	grunt.registerTask('useminhtml',['useminPrepare','concat','uglify','cssmin','filerev','usemin']);
	grunt.registerTask('copyy',['complies','newer:imagemin:build','hint','clean:dist','copy:html','useminhtml','connect:server','watch']);
	grunt.registerTask('default',['complies','newer:imagemin:build','hint','clean:dist','copy:html','useminhtml','connect:server','watch']);
	// grunt.registerTask('aa','dsdsd',function(arg){
	// 	console.log(this.target);
	// 	if(arg==="default"){
	// 		grunt.task.run(['default']);	
	// 	}
	// 	if(arg==="hint"){
	// 		grunt.task.run(['hint']);
	// 	}
		
	// });
};