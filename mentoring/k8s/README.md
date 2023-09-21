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
    > encapsaltes the containers
- svc: 
    > Related to a POD, allows communication to and between PODs
    > CusterIP: Internal communication
    > NodePort: External communication
    > LoadBalancer: Cloud communication
- rs:
    > encapsulates one or more PODs
    > If one of the PODs go down, it can create a new instance
- deploy:
- vol:
- hpa:
- pv:
- pvc:
- sc:
- quota:

## POD

- SImilar to the container, the pod will be the place where the softwre fragment is, but POD is not a peice of container, it encapsulate one or more containers
- Encapsulate COntainers

### Create pods manually

```
kubectl run nginx-pod --image=nginx:latest
```

### List pod

```
  kubectl get pods
```

### Describe pod

```
  kubectl describe pod POD_NAME
```

### Edit pod

```
kubectl edit pod POD_NAME
```

### Create POD in declarative approach

- Create a .yml file like in examples/examples-1/init.yml
- ru the command

```
kubectl apply -f FILE_PATH_NAME
```

### DELETE POD

- Delete a POD created manually

```
kubectl delete pod POD_NAME
```

- Delete a POD created by declarative yml file

```
kubectl delete -f ./FILE_NAME
```


## SERVICE
- allows communication to POD and between pods
- A POD can have a SVC, and other pods can connect to it via CusterIP
- Is possible config to PODs externally via NodePort

## CONFIG MAP
wayto save condifg that can be shared and reused in pods