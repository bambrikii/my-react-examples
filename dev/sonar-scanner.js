const sonarqubeScanner = require('sonarqube-scanner');
 
sonarqubeScanner(
  {
    serverUrl : 'http://localhost:9000',
    token : "9860ddfaa4499eae97c3d98cc4abb87b74b16a48",
    options: {
      'sonar.projectName': 'My React',
      'sonar.projectDescription': 'Description for "My React" project...',
      'sonar.sources': 'dist',
      'sonar.tests': 'specs'
    }
  },
  () => process.exit()
)
