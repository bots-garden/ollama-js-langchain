import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { StringOutputParser } from "@langchain/core/output_parsers";

const model = new ChatOllama({
  baseUrl: "http://localhost:11434",
  model: "tinydolphin",
});

const stream = await model
  .pipe(new StringOutputParser())
  .stream(`give me a recipe of fish an chips`);

const chunks = [];
for await (const chunk of stream) {
  chunks.push(chunk);
}

console.log(chunks.join(""));