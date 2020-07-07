Create bridge network (connection between containers)
```
docker network create jenkins
```

Create volumes (share TLS certs and persist data)
```
docker volume create jenkins-docker-certs
docker volume create jenkins-data
``` 

Running docker:dind container (use docker inside jenkins)
```
docker container run --name jenkins-docker --rm --detach \
  --privileged --network jenkins --network-alias docker \
  --env DOCKER_TLS_CERTDIR=/certs \
  --volume jenkins-docker-certs:/certs/client \
  --volume jenkins-data:/var/jenkins_home \
  --volume "$HOME":/home \
  --publish 3000:3000 docker:dind
```

Running instance container
```
docker container run --name jenkins-tutorial --rm --detach \
  --network jenkins --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 \
  --volume jenkins-data:/var/jenkins_home \
  --volume jenkins-docker-certs:/certs/client:ro \
  --volume "$HOME":/home --publish 8080:8080 jenkinsci/blueocean
```

Website
https://www.jenkins.io/doc/tutorials/build-a-node-js-and-react-app-with-npm/