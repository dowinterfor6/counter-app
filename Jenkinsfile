pipeline {
  agent {
    docker {
      image 'node:14-alpine'
      args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Initialize'){
      def dockerHome = tool 'jenkinsDocker'
      env.PATH = "${dockerHome}/bin:${env.PATH}"
    }
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh './scripts/test.sh'
      }
    }
    stage('Deliver') {
      steps {
        sh './scripts/deliver.sh'
        input message: 'Finished using the website? (Click "Proceed" to continue)'
        sh './scripts/kill.sh'
      }
    }
  }
}