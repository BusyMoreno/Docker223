# -------- BUILD STAGE --------
FROM gradle:8.5-jdk17 AS build

WORKDIR /home/gradle/src
COPY --chown=gradle:gradle . .
RUN gradle --no-daemon bootJar

# -------- RUNTIME STAGE --------
FROM eclipse-temurin:17-jre

WORKDIR /app
COPY --from=build /home/gradle/src/build/libs/*.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "-Xmx1g", "app.jar"]
