# cypress-workflow-act

A repo with a cypress test and basic setup for [nektos/act](//github.com/nektos/act).

## Running docker for nektos/act on M1 Mac machines

Running docker on M1 Mac machines requires the following prerequisites:

- Install colima – this is a free to use docker runner for Apple M1 Macs
  - `brew install colima`
- Install docker
  - `brew install docker`
- Start colima
  - `colima start`
- Check docker can connect to colima
  - `docker ps`
- Create a symbolic link to colima's docker socket. Without this, `act` does not find the docker socket.
  - ```sh
    cd /var/run
    sudo ln -s ~/.colima/docker.sock
    ```
- Install act
  - `brew install act`

You can now run our local workflow:

```sh
pnpm act
```
