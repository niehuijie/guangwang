'use strict';
module.exports =function(grunt){
	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);
	var config = {
		app:'src',
		dist:'dist'
	};
	grunt.initConfig({
		//文件夹名
		pkg: grunt.file.readJSON('package.json'),
		config:config,
		meta: {
		    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
		},
		jshint:{
			options:{
				jshintrc:'.jshintrc',
			},
			scripts:{
				files:{
					src:['<%=config.app%>/js/*.js']
				}
			},
			gruntfile:{
				files:{
					src:['Gruntfile.js']
				}
			}
		},
//		csslint:{
//			options:{
//				csslintrc: '.csslintrc'
//			},
//			styles:{
//				src:['<%=config.dist%>/css/*.css']
//			}
//		},
//		htmlhint:{
//			options:{
//				htmlhintrc:".htmlhintrc"
//			},
//			html1:{
//				src: ['<%=config.app%>/*.html']
//			}
//		},
		imagemin:{
			options: {
				optimizationLevel: 3,
			},
			build: {
				files: [{
					expand: true,
					cwd: '<%=config.app%>/images/',
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
				src: '<%=config.app%>/css/*.css'
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
					cwd: '<%=config.app%>/css/sass/',
					src: '*.scss',
					dest: '<%=config.app%>/css/',
					ext: ".css",
					extDot: 'first'
				}]
			}
		},
		cssmin: {
//			 add_banner: {
//			    options: {
//			      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
//			    },
//			    files: {
//			      'src/css/index.css': ['dist/css/.css']
//			    }
//			 },
	        prod: {
	          options:{
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
	          	report: 'gzip',
	            compatibility : 'ie7', 
                noAdvanced : true,               
                footer:'/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'
	          },
	          files: [{
	              expand: true,
	              cwd: 'src/css/',
	              src: ['*.css'],
	              dest: 'dist/css/',
	              ext: '.css'
	           }]
	        }
	    },
	    uglify: {
	    	options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            buildall: {
                options: {
                    mangle: true,
                    preserveComments: 'all', 
                    footer:'/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'
                },               
                files: [{
                    expand:true,
                    cwd:'src/js',
                    src:'**/*.js',
                    dest: 'dist/js'
                }]
            },
		},
		copy:{
			main: {
			 	files:[{
				    expand: true,
				    cwd: 'src/',
				    src: '*.html',
				    dest: 'dist/'					  
			    }]
			},
//			scripts:{
//				files: [{
//					expand: true,
//					cwd: 'src/js/',
//					src: '**/*',
//					dest: 'dist/js/',
//				}]
//			},
			sprimg:{
				files: [{
					expand: true,
					cwd: 'src/images/',
					src: '*.{png,jpg,gif}',
					dest: 'dist/images/',
				}]
			}
//			sprcss:{
//				files:[{
//					expand:true,
//					cwd:'src/css/cssmin/',
//					src:'*.css',
//					dest:'dist/css/'
//				}]
//			
	    },
		usemin: {
		       html: 'dist/*.html'
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
		//配置一个服务器
		connect: {
		    server: {
		      options: {
		        port:8000,
		        hostname: '10.60.40.56',//默认就是这个值，可配置为本机某个 IP，localhost 或域名10.60.40.56
		        base:'./dist/',
		        open:true,
		        livereload:true,
		        directory:'./dist/'
		      }
		    }
		},
		 includereplace: {
	        options:{
	            globals:{
	                var1:"var1",
	                var2:"var2"
	            }
	        },
	        html: {
	            cwd: 'src/',
	            expand: true,
	            src: ['*.html'],
	            dest: 'dist/'
	        }
	    },
		watch:{
			js:{
				files:['<%=config.app%>/js/{,*/}*.js'],
				tasks:['jshint']
			},
			js:{
				files:['src/js/*.js'],
				tasks:['uglify']
			},
			styles:{
				files:['src/css/sass/*.scss'],
				tasks:['complies','cssmin']
			},
			html:{
				files:['src/*.html'],
				tasks:['copy','includereplace']
			},
			img:{
				files:['src/images/*.{png,jpg,gif}'],
				tasks:['copy:sprimg']
			},
		    livereload:{
				options:{
					livereload:true,
				},
				files:[  //下面文件的改变就会实时刷新网页
					'dist/*.html',
					'dist/css/*.css',
					'dist/js/*.js',
					'dist/images/*.{png,jpg}'
				]
			}		  
		}		
	//任务配置	
});
	grunt.registerTask('complies', ['sass','autoprefixer']);
	grunt.registerTask('hint',['jshint:scripts']);
	grunt.registerTask('mincopy',['cssmin','uglify','copy','includereplace']);
	grunt.registerTask('default',['complies','hint','mincopy','connect:server','watch']);
};
