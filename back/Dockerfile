FROM gradle:jdk17-alpine as builder

ENV APP_HOME=/app

WORKDIR $APP_HOME

COPY build.gradle settings.gradle gradlew $APP_HOME/
COPY gradle $APP_HOME/gradle


RUN ./gradlew build || return 0

COPY . .

RUN gradle build


FROM openjdk:17-jdk-alpine

ENV ARTIFACT_NAME=gestor_de_anuncio-0.0.1-SNAPSHOT.jar
ENV APP_HOME=/app

WORKDIR $APP_HOME

COPY --from=builder $APP_HOME/build/libs/$ARTIFACT_NAME .

EXPOSE 8080

ENTRYPOINT exec java -jar ${ARTIFACT_NAME}

CMD ["java", "-jar", "${ARTIFACT_NAME}"]