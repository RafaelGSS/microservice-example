# microservices-example
Just example of architecture microservices with API Gateway/Management and AMQP/MQTT


## Running

Make sure you have Docker installed in you workspace.

```sh
./setup.sh
```

And check your containers

```sh
docker ps
```

## Usage

**Message Broker**:
Make a post to `users` api sending a raw json like:

```json
{
	"name": "test",
	"email": "test@test.com"
}
```

So, if you receive something like: `[x] Sended...`, just go to container `ms-orders-api`
