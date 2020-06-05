node {

    git branch: 'master', 
        url: 'https://github.com/dowinterfor6/counter-app'

    // pull dependencies from npm
    // on windows use: bat 'npm install'
    stage('Build') {
        sh 'npm install'
    }

    // stash code & dependencies to expedite subsequent testing
    // and ensure same code & dependencies are used throughout the pipeline
    // stash is a temporary archive
    stash name: 'everything', 
          excludes: 'coverage/**', 
          includes: '**'
    
    // test with PhantomJS for "fast" "generic" results
    // on windows use: bat 'npm run test-single-run -- --browsers PhantomJS'
    stage('Run Jest unit tests') {
        sh 'npm test'
    }
    
    // archive karma test results (karma is configured to export junit xml files)
    stage('Archive') {
        step([$class: 'JUnitResultArchiver', 
            testResults: 'coverage/**/junit.xml'])
    }
}

//demo second agent
// node('mac') {
//     sh 'ls'
//     sh 'rm -rf *'
//     unstash 'everything'
//     sh 'ls'
// }

//parallel integration testing
// stage 'Browser Testing'
// parallel chrome: {
//     runTests("Chrome")
// }, firefox: {
//     runTests("Firefox")
// }, safari: {
//     runTests("Safari")
// }

// def runTests(browser) {
//     node {
//         sh 'rm -rf *'
//         unstash 'everything'
//         sh "npm run test-single-run -- browsers ${browser}"
//         step([$class: 'JUnitResultArchiver',
//                 testResults: 'test-results/**/test-results.xml'])
//     }
// }

def notify(status){
    emailext (
      to: "achan@nisum.com",
      subject: "${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
      body: """<p>${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
        <p>Check console output at <a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a></p>""",
    )
}