module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    babel: {
      options: {
        plugins: ["transform-react-jsx"],
        presets: ["react"]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'js',
          src: ['**/*.jsx'],
          dest: 'js_built',
          ext: '.js'
        }]
      }
    },
    requirejs: {
      compile: {
        options: {
          mainConfigFile: 'js/common/config/RequireConfig.js',
          name: "js_built/countingApp/Main.js",
          out: 'js_built/app.js',
          optimize: "none",
        }
      }
    },
  });

  grunt.registerTask("default", ["babel", "requirejs"]);
};
