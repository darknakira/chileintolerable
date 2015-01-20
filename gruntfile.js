module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine : {
          // Your project's source files
          src : 'src/**/*.js',
          // Your Jasmine spec files
          specs : 'specs/**/*spec.js',
          // Your spec helper files
          helpers : 'specs/helpers/*.js'
        },
        less : {
            development: {
                options: {
                    paths: ["src/less"],
                    modifyVars: {
                        imgPath: '"http://192.168.0.26:3000/img/"'
                    }
                },
                files: {
                    "public/css/main.css": "src/less/style.less"
                }
            },
            production: {
                options: {
                    paths: ["src/less"],
                    cleancss: true,
                    compress: true,
                    modifyVars: {
                        imgPath: '"http://192.168.0.26:3000/img/"'
                    }
                },
                files: {
                    "public/css/main.css": "src/less/main.less"
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/js/*.js','src/less/*.less'],
                tasks: ['concat','less:development'],
                options: {
                    spawn: false
                }
            }
        },
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                separator: ';'
            },
            dist: {
                src: ['src/js/vendor/three.min.js','src/js/vendor/*.js','src/js/map.js','src/js/graphs.js','src/js/cloud.js','src/js/main.js'],
                dest: 'public/js/main.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['concat']);
};
