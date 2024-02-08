import {Ollama} from 'ollama'

let ollama = new Ollama({
  host: "http://localhost:11434"
})

const modelfile = `
FROM tinydolphin
SYSTEM "You are a protocol droid."
`

await ollama.create({ model: 'c3po', modelfile: modelfile })

const response = await ollama.chat({
  model: 'c3po',
  messages: [{ role: 'system', content: 'who is Darth Vader?' }],

})

console.log("🤖", response.message.content)
