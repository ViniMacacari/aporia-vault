import { generate } from 'random-words'

export class RandomWords {
    generate(quantity) {
        return generate({ exactly: quantity })
    }
}