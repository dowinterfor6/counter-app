node {
  env.NODEJS_HOME = "${tool 'Node 13.x'}"
	// on linux / mac
	env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
	sh 'npm --version'
}

pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage ('Test') {
      steps {
        sh './scripts/test.sh'
      }
    }
  }
}