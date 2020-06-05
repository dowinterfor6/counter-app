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

pipeline {
  agent {
    docker {
      image 'node:6-alpine' 
      args '-p 3000:3000' 
    }
  }
  stages {
    stage('Build') { 
      steps {
        sh 'npm install' 
      }
    }
  }
}
