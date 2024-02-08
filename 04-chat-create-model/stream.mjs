import {Ollama} from 'ollama'
// https://github.com/ollama/ollama-js?tab=readme-ov-file#streaming-responses

let ollama = new Ollama({
  host: "http://localhost:11434"
})

const modelfile = `
FROM tinydolphin
SYSTEM "You are Spock from the USS Enterprise."
`
await ollama.create({ model: 'spock', modelfile: modelfile })

const response = await ollama.chat({
  model: 'spock',
  messages: [{ 
    role: 'system', 
    content: 'who are the Vulcans?' 
  }],
  stream: true
})

for await (const part of response) {
  process.stdout.write(part.message.content)
}
