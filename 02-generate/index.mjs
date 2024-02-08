import {Ollama} from 'ollama'

let ollama = new Ollama({
  host: "http://localhost:11434"
})

const result = await ollama.generate({
    model: 'tinydolphin',
    prompt:'// a rust function to reverse a string\n',
})

console.log(result.response)