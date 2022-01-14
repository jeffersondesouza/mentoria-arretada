# Mentoring let's rule AWS - S3

### INTRO
- Simple Storage Service - S3
- Serviço de armazenamento de objetos
- objetos sao arquiv txt, tar etc
- bucket é o repositótio onde armazenamermos e colocaremos politicas de acesso e etc

- Acões - Url Pré assinadas: criam um ur de acesso ao arquivo com token de compartilhamento
### GENERAL

- cp: copy files from local  to aws butcket
- ls: list buckets or buckets objects
- mb: creates a bucket
- sync: sends all files to a bucket if the files are not there or if were changed since last sync  
- mv: moves a localfile  or bucket object
- presign: generate the pre sing url wth limited access time
- rm: deletes an bucket object
- rb: deletes and empty bucket. ue --force if not empty 
- website: configs the website of bucket visitors will get in