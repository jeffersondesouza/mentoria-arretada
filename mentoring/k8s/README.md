# Mentoring let's rule K8s

## Installation

kubectl:

```
  sudo apt-get install curl -y
  curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
  chmod +x ./kubectl
  sudo mv ./kubectl /usr/local/bin/kubectl
```

minikube:

```
  curl -Lo minikube https://storage.googleapis.com/minikube/releases/v1.12.1/minikube-linux-amd64 \ && chmod +x minikube
  sudo install minikube /usr/local/bin/
```

## INTRO

- Image the situation where we have many containers in a Machine, and the Machine is over i'ts computing limit, we can buy more space, RAM etc to make it able to keep Running (Vertical Scale) or we can add more small Machines to work in parallel computing the data in parallel (Horizontal Scale)

- Vertical Scale: Buy more resources to a Machine to make it able to run

- Horizontal Scale: Work with parallel machines, spiting the computing process
  console.log(spiting)

- Kubernetes works in the Horizontal Scale approach, it cah have many VMs, the group of VMs is called Cluster
- If you have 2 VMs in a cluster and one is processing a container, and you starts a new one, the k8s make the second one process the new container. If the new container fails, k8s will run a new one, if one VM gets it's limit, k8s can add a new one to run a new container

- Kubernetes crate clusters, VMS, orchestrate containers, manage the VMs process

## Architecture

- A cluster contains 2 types of VM, "Master" responsible for managing the cluster and the "Node" responsible for executing the hard work, nodes executes the pods that encapsulate the containers

- Master, manager the cluster, if a pod go down it will turn it one, new commands are made to masters. Master also keep and update the State, and Receive nd execute new commands

- CONTROL PLANE

  - API: rest api responsible for the receiving and executing commnads
  - CM (controller manager): Keep and update state
  - schedule: Define where a pod is executed
  - etcd: store all relevante data in a key value db

- Nodes:

  - Kubelet: respnsable for execution of a teh pods inside a node
  - KubeProxy: makes the comunication between nodes of a clster

- Kubectl
  - Using it to send the commands to the cluster
  - to work locally need instlling the VM driver, virtual box on that case
  - Start the virtualized
  ```
  minikube start --vm-driver=virtualbox
  ```

## GENERAL
- pod:
    > kind: Pod
    > encapsulates one or more containers
    > The place where the software fragment is, but POD is not a piece of container, it encapsulate one or more containers
    > kubectl run nginx-pod --image=nginx:latest
    > kubectl get pods
    > kubectl describe pod POD_NAME
    > To POD in declarative approach, Create a .yml file like in examples/examples-1/init.yml
    > run `kubectl apply -f FILE_PATH_NAME`
    > Delete a POD created manually `kubectl delete pod POD_NAME`
    > Delete a POD created by declarative yml file `kubectl delete -f ./FILE_NAME`
    > Execute a pod in iterative mode (a bash for example) 
      - `kubectl exec -it POD_NAME -- bash`
      - `kubectl exec -it POD_NAME --container CONTAINER_NAME -- bash`
- svc:
    > Service
    > kind: Service
    > Related to a POD, allows communication to and between PODs
    > CusterIP: Internal communication
    > NodePort: External communication
    > LoadBalancer: Cloud communication
- rs:
    > Replica Set
    > kind: ReplicaSet
    > encapsulates one or more PODs
    > If one of the PODs go down, it can create a new instance
- deploy:
    > Deploy/Deployment
    > kind: Deployment
    > create pod via deploy is a BEST PRACTICE
    > similar to rs, but it "involves" rs. when create a deploy it auto create rs
    > It gives a version control of the rs, so you can record a config
    > you can check the config history
    > can go back to a past config
    > kubectl apply -f DEPLOY_FILE_PATH --record            // execute the deploy and save it
    > kubectl rollout history deployment DEPLOY_NAME        // gives the history of the deploy
    > kubectl annotate deployment DEPLOY_NAME DEPLOY_CHANGE-CAUSE="message"     // set a msg
    > kubectl rollout undo deployment DEPLOY_NAME --to-revision=REVISION_NUMBER // go back to revision
- vol:
    > Volume
    > kind: don't have, it is defined in the POD
    > Store data independently of the life of the POD
- pv:
    > Persistent Volume
    > kind: PersistentVolume
    > volume to persist data in the Cloud Platform
    > arc: 
      `DISK > PV > PVC > POD`
- pvc:
    > Persistent volume Claim
    > kind: PersistentVolumeClaim
    > a PVC access a PV
- sc:
    > Managers the VM disk and the volume dynamically
- hpa:
- quota:
