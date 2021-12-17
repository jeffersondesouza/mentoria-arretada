# Mentoring let's rule K8s

## EC2

### INTRO
- Elastic Compute Cloud (EC2)
- Serviço de máquinas virtuais
- EC2 Instance:
  > servidor virtual capaz de prover VMs;
- Image: a imagem que será base de nosso ambiente
- Instance Type: caracteristicas de nossa instancia
  > CPU, memória, geração etc

### GENERAL
- Security Keys:
  > prove o acesso mais seguro e remoto à instnância
  > gera-se um aqruivo .pem ou .ppk(quando usando putty)
  > ideal mover para pasta .ssh
  > ideal colocar permições de leitura apenas
- Connect:
  > ssh -i "ARQUIVO.pem" ec2-user@<IP_DA_INSTANCIA>.compute-1.amazonaws.com
- Security Groups:
  > bloqueia ou liberar o acesso mais seguro e remoto à instnância
  > Tratam das regras de acesso às máquinas(acesso via ssh ou http por ex)
  > Podemos restringir ou liberar tal acesso
  > Grupo DEFAULT criado por padrão ao criar a conta
  > DEFALT libera acesso todo trafico de entrada e saida
  > ao criar uma instancia, um grupo será adicionado a ela
  > launch-wizard-NUMERO: criado ao se criar a instancia
  > launch-wizard vai controlar o acesso à instancia de nossa VM
  > se colocarmos o MEU IP, apenas nosso pc(IP) pode acessar via ssh
    DupPoe123
- Load Balance: 
  > controla o acesso entre as instâncias
- Auto scaling:
  > cria novas intancias para garantir a alicação sempre up
  > pode aumentar e reduzizr instancias via config

Test:
  - criar 2 intancia
  - add um banco RDS
  - colocar um balanceador
  - add um auto scaling
    - derrubar instancias e verificar q app continua no ar




