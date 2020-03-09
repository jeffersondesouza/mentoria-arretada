# Mentoring let's rule K8s


- Image the situation where we have many containers in a Machine, and the Machine is over i'ts computing limit, we can buy more space, RAM etc to make it able to keep Running (Vertical Scale) or we can add more small Machines to work in parallel computing the data in parallel (Horizontal Scale)

- Vertical Scale: Buy more resources to a Machine to make it able to run

- Horizontal Scale: Work with parallel machines, spiting the computing process
console.log(spiting)

- Kubernetes works in the Horizontal Scale approach, it cah have many VMs, the group of VMs is called Cluster
- If you have 2 VMs in a cluster and one is processing a container, and you starts a new one, the k8s make the second one process the new container. If the new container fails, k8s will run a new one, if one VM gets it's limit, k8s can add a new one to run a new container


- Kubernetes crate clusters, VMS, orchestrate containers, manage the VMs process