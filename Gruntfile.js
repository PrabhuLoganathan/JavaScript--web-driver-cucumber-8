module.exports = function(grunt) {
  grunt.initConfig({
    protractor: {
      options: {
        configFile: "config.js",
        keepAlive: true,
        noColor: false,
        args: {

        }
      },
      your_target: {
        options: {
          configFile: "config.js",
          keepAlive: true,
          args: {
            seleniumServerJar: 'node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
            chromeDriver: 'node_modules/webdriver-manager/selenium/chromedriver_2.22'
          }
        }
      },
    },

  'protractor-cucumber-html-report': {
    default_options: {
      options: {
        dest: './reports/results',//Where you want to generate the HTML report.
        output: 'report.html',//File Name
        testJSONDirectory: 'reports'//Mention where you have generated JSON format.
      }
    }
  },

})

grunt.loadNpmTasks('grunt-protractor-runner');
grunt.loadNpmTasks('grunt-protractor-cucumber-html-report');

grunt.registerTask('default', ['protractor:your_target','protractor-cucumber-html-report']);
};
