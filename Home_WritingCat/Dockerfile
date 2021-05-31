# Docker image for springboot application
# VERSION 0.1
# Author: istarwyh
FROM openjdk:11-jre
ADD target/WritingCat.jar wc0.2.1.jar
ADD target/WritingCat.jar.original WritingCat.jar.original
EXPOSE 8080
ENTRYPOINT ["java","-jar","/wc0.2.1.jar"]