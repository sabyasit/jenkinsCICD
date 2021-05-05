pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm build'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
        stage('Sonar Coverage') {
            steps {
                bat 'npm run sonar'
            }
        }        
        stage('Deploy') {
            steps {
                echo 'deploy'
            }
        }             
    }
}