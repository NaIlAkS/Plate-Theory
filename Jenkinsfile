pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build --no-cache -t vite-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker rm -f vite-container || true
                docker run -d -p 8081:80 --name vite-container vite-app
                '''
            }
        }
    }
}
