## SOME DEFINITIONS
- Docker is a ecosystem where create, run containers
- A Container is a lightweight, executable and independent package of software that includes everything needed to run an application (code, libs, dependencies, OS)
- Image: Is a template containing intrusions to creating the container(we use Dockerfile to do that)
- Images: Layers responsible for creating the container. Each Image has it's own ID
- Docker File -> Images -> Container
- From a "DockerFile" we create a "Image", and by RUN the image, we create the "Container" 
- By default, the Image is Read Only, when we make changes(like installing an app in a ubuntu image) the new data go to a Read Write layer(but not persisted)

- Volumes: to persist data in the read write layer, we use volumes
- with Volumes, docker will be able to manage/persist files(data) via file system
- ex: docker run -it -v VOLUME_NAME:/app ubuntu bash
- ex2: docker run -it --mount source=VOLUME_NAME,target=/app ubuntu bash

- Now, more than one running containers could access data in app folder of the container
- In file system,the data can be found in /var/lib/docker/volumes/VOLUME_NAME/_data

- TMPFS: works in Linux

- tmpfs writes the data in read write layer,so,if run a new container, the data is not there,
data lives only in the container
- goo to store temp data
- ex: docker run -it tmpfs=/app ubuntu bash
- ex2: docker run -it --mount type=tmpfs,destination=/app ubuntu bash




## Containers Commands
docker pull ubuntu      // gets a containers from docker hub 
docker run              // gets a container (if not locally) and execute it
docker run -it "image"  // executes a container in Interactive mode
docker exec             // execute specific actions in containers
docker port             // shows the Port of a executing container
docker stop             // stop a container
docker run -–mount type=bind,source=/home/my-dir,target=/app nginx


## Alias
 docker rmi $(docker image ls -aq)

## ERROS
- ErrImagePull, ErrImageNeverPull and ImagePullBackoff Errors
  eval $(minikube docker-env)

- Error when db connection is "in use" when UP after a down

