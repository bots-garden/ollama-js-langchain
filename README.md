# langchain-sandbox

This project use the **[Ollama project and its Docker image](https://ollama.ai/blog/ollama-is-now-available-as-an-official-docker-image)**.

## Start the project

This project will download all the dependencies at start, and then start the model. So be patient.

The model is loaded at the start of the Gitpod project.
- It pulls the Docker image
- It starts the Docker Ollama container
- Ollama download the LLM and then starts it

> The model is: **[orca-mini](https://ollama.ai/library/orca-mini)**

Once the model started, you can check if everything is ok with this command (in another terminal):

```bash
curl -X POST http://localhost:11434/api/generate -d '{
"model": "orca-mini",
"prompt":"Why is the sky blue?"
}'
```

Wait from some seconds and you should get:
```json

```
