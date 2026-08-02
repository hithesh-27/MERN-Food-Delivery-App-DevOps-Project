pipeline {
    agent any

    tools {
        jdk 'jdk21'
        nodejs 'node16'
    }

    environment {
        SCANNER_HOME = tool 'sonar-scanner'
        DOCKERHUB_CREDENTIALS = 'docker'
        IMAGE_BACKEND = 'hitheshgowda10docker/tomato-backend'
        IMAGE_FRONTEND = 'hitheshgowda10docker/tomato-frontend'
        IMAGE_ADMIN = 'hitheshgowda10docker/tomato-admin'
    }

    stages {

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/hithesh-27/MERN-Food-Delivery-App-DevOps-Project.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh '''
                    ${SCANNER_HOME}/bin/sonar-scanner \
                    -Dsonar.projectKey=tomato \
                    -Dsonar.sources=.
                    '''
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Push Images') {
            steps {
                sh '''
                docker tag mern-food-delivery-app-devops-project-backend:latest $IMAGE_BACKEND:latest
                docker tag mern-food-delivery-app-devops-project-frontend:latest $IMAGE_FRONTEND:latest
                docker tag mern-food-delivery-app-devops-project-admin:latest $IMAGE_ADMIN:latest

                docker push $IMAGE_BACKEND:latest
                docker push $IMAGE_FRONTEND:latest
                docker push $IMAGE_ADMIN:latest
                '''
            }
        }
    }
}
