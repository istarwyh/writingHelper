# Docker image for springboot application
# VERSION 0.1
# Author: istarwyh
FROM openjdk:11-jre
ADD target/WritingCat-0.1.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]