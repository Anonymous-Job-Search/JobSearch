# Anonymous Job Search

[https://jobs.localhost](https://jobs.localhost)

## Installation

- Install [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) tool.
- Install [mkcert](https://github.com/FiloSottile/mkcert)

```shell
# Only for Manjaro
# sudo trust anchor $(mkcert -CAROOT)/rootCA.pem

mkcert -install
mkcert -cert-file ./.docker/nginx/ca.crt -key-file ./.docker/nginx/ca-key.key jobs.localhost
```

Now run `make up`.

## Configuration

### Github

- Allow only squash merging
- Always suggest updating pull request branches
- Allow auto-merge
- Automatically delete head branches
- Required 1 approval(s) before merging for **main** branch
