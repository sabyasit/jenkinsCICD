pipeline {
    agent {
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Sonar Coverage') {
            steps {
                sh 'npm run sonar'
            }
        }        
        stage('Deploy') {
            steps {
                echo 'deploy'
            }
        }             
    }
}