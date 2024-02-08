import {Ollama} from 'ollama'

/*
https://stephencowchau.medium.com/ollama-context-at-generate-api-output-what-are-those-numbers-b8cbff140d95
*/

let ollama = new Ollama({
  host: "http://localhost:11434"
})

const result1 = await ollama.generate({
  model: 'tinydolphin',
  prompt:'Who is James T Kirk?',
  context: []
})

console.log("🤖", result1.response)

const result2 = await ollama.generate({
  model: 'tinydolphin',
  prompt:'Who is his best friend?',
  context: result1.context
})

console.log("🤖", result2.response)
