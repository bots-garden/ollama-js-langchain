import {Ollama} from 'ollama'
// https://github.com/ollama/ollama-js?tab=readme-ov-file#streaming-responses

let ollama = new Ollama({
  host: "http://localhost:11434"
})

const response = await ollama.chat({

  model: 'tinydolphin',
  messages: [{ 
    role: 'user', 
    content: 'Tell me what is the link between Leia Organa and Luke Skywalker' 
  }],
  stream: true
})

for await (const part of response) {
  process.stdout.write(part.message.content)
}
