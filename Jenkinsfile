pipeline {
  agent {
    docker {
      image 'node:14-alpine'
      args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
    VERSION = '1.0.0'
  }
  stages {
    stage('Build') {
      steps {
        echo "Building version ${VERSION}"
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
    stage('Artifact') {
      steps {
        echo "Artifact"
        archiveArtifacts 'dist/' 'public/'
      }
    }
  }
  post {
    success {
      echo 'Succeeded build'
    }
    failure {
      echo 'Failed build'
    }
  }
}