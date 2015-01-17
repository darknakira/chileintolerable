module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less : {
            development: {
                options: {
                    paths: ["src/less"],
                    cleancss: true,
                    compress: true
                },
                files: {
                    "public/css/main.css": "src/less/main.less"
                }
            },
            production: {
                options: {
                    paths: ["src/less"],
                    cleancss: true,
                    compress: true,
                    modifyVars: {
                        imgPath: '"http://chileintolerable.cl/img"'
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
                tasks: ['concat','less'],
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
                src: ['src/js/skrollr.min.js', 'src/js/main.js'],
                dest: 'public/js/main.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['concat']);
};
