# 🦙 Ollama, 🟨 Ollama-js and 🦜🔗 LangChain JS with 🍊 Gitpod 🎉

> - ✋ this is a work in progress 🚧, but you can already play with it 🥰
> - 🤖 caution: it's not for production, it's for learning purpose

This project used the **[Ollama project and its Docker image](https://ollama.ai/blog/ollama-is-now-available-as-an-official-docker-image)**.

The main goal is to experiment with **[Ollama-js](https://github.com/ollama/ollama-js)** and **[LangChain JS](https://js.langchain.com/docs/get_started/introduction)**

## Start the project

This project will download all the dependencies at start, and then start the model. So be patient.

The model is loaded at the start of the Gitpod project.
- It pulls the Docker image
- It starts the Docker Ollama container
- Ollama download the LLM and then starts it

> The model is: **[tinydolphin](https://ollama.ai/library/tinydolphin)**

Once the model started, you can check if everything is ok with this command (**in another terminal**):

```bash
curl -X POST http://localhost:11434/api/generate -d '{
"model": "tinydolphin",
"prompt":"Why is the sky blue?"
}'
```

