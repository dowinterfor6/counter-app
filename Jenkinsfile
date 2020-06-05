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

  stage('Webpack build') {
    sh 'npm run build'
  }

  stage('Unit Jest testing') {
    sh 'npm test'
  }
  // }
}
