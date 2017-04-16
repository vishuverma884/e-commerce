/*Grunt Task Runner*/
module.exports = function(grunt){
    
    /*START Grunt initialize the config*/
    grunt.initConfig({
        //grunt-contrib-clean task to clear the bin folder
        clean:{
            default:{
                src:['build/*']
            }
        },
        //grunt-contrib-copy task to copy files from directory to build folder
        copy:{
            default:{
                files:[{
                    expand:true,
                    cwd:'app',
                    src:['**/*.js'],
                    dest:'build'
                },{
                    expand:true,
                    flatten:true,
                    cwd:'bower_components',
                    src:[
                        'angular/angular.min.js',
                        'angular-ui-router/release/angular-ui-router.min.js',
                        'jquery/dist/jquery.min.js',
                        'bootstrap/dist/js/bootstrap.min.js'
                        ],
                    dest:'build/libs/'
                }]                                  
            }
        },
        //grunt-contrib-htmlmin task to copy html files to build folder and remove unwanted attributes
        htmlmin:{
            default:{
                files:[{
                    expand:true,
                    flatten:true,
                    cwd:'app/modules',
                    src:['**/*.html'],
                    dest:'build/views'
                }]
            }            
        },
        //grunt-targethtml task to copy specific html file to build folder
        targethtml:{
            default:{
                files:{
                    'build/index.html':'app/index.html'
                }
            }
        },
        //grunt-contrib-connect task to start a localserver to run the application
        connect:{
            server:{
                options:{
                    open: true,
                    base: 'build',
                    port:9001,
                    keepalive:true
                }
            }            
        }
    });
    /*STOP Grunt initialize the config*/

    /*START Grunt Load NPM Plugins that provide Tasks*/
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-contrib-connect');
    /*STOP Grunt Load NPM Plugins that provide Tasks*/

    /*START Grunt Register the tasks*/
    grunt.registerTask('debug',['clean:default','copy:default','htmlmin:default','targethtml:default','connect:server']);
    /*STOP Grunt Register the tasks*/
};