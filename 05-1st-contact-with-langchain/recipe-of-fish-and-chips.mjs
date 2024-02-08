
import { Ollama } from "@langchain/community/llms/ollama";

const ollama = new Ollama({
  baseUrl: "http://localhost:11434",
  model: "tinydolphin",
});

const stream = await ollama.stream(
  `give me a recipe of fish an chips`
);

const chunks = [];
for await (const chunk of stream) {
  chunks.push(chunk);
}

console.log(chunks.join(""));
