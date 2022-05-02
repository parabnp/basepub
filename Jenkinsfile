@Library('piper-lib-os') _

node() {
       stage('prepare') {
        echo "starting stage prepare"
        deleteDir()
        checkout scm
        fioriOnCloudPlatformPipeline script:this
    }
    stage('build') {
        mtaBuild script:this
    }
    stage('acceptance') {
       cloudFoundryDeploy script: this
    }
    
    }
