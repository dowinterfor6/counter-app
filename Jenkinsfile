// node {
//     stage('checkout') {
//         git 'https://github.com/dowinterfor6/counter-app'
//     }
    
//     def project_path = 'samples/atmosphere-ee6'
    
//     stage('compiling, test, packaging') {
//         sh label: '', script: 'mvn -f pom.xml clean package'
//     }
    
//     stage('archiving') {
//         publishHTML([allowMissing: true, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'target/site/jacoco/', reportFiles: 'index.html', reportName: 'Code Coverage', reportTitles: ''])
//         archiveArtifacts 'target/*.?ar'
//         step([$class: 'JUnitResultArchiver', testResults: 'target/surefire-reports/TEST-*.xml'])
//     }
// }

node {
  // agent {
  //   docker {
  //     image 'node:6-alpine' 
  //     args '-p 3000:3000' 
  //   }
  // }
  // stages {
  stage('Download dependencies') { 
    // steps {
    sh 'npm install' 
    // }
  }

  state('Webpack build') {
    sh 'npm run build'
  }

  state('Unit Jest testing') {
    sh 'npm test'
  }
  // }
}
