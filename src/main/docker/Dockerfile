FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
ADD keystore.p12 keystore.p12
ADD PersistentIoT-PWA-0.1.0.jar app.jar
RUN sh -c 'touch /app.jar'
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]
