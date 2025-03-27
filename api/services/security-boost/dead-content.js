import { RandomWords } from '../../utils/random-words.js'

export class DeadContent {
    randomWords = new RandomWords()

    generateFakeObject() {
        const obj = {}
        const keyCount = Math.floor(Math.random() * 4) + 2
        for (let i = 0; i < keyCount; i++) {
            const key = this.randomWords.generate(1)[0]
            const value = this.randomWords.generate(1)[0]
            obj[key] = value
        }
        return JSON.stringify(obj)
    }

    addContent(realContent) {
        const real = `->ap/${realContent}\\ap<-`

        const deadContent = this.randomWords.generate(4096)

        const fakeObjectCount = 5
        for (let i = 0; i < fakeObjectCount; i++) {
            const fakeObj = this.generateFakeObject()
            const index = Math.floor(Math.random() * (deadContent.length + 1))
            deadContent.splice(index, 0, fakeObj)
        }

        const realIndex = Math.floor(Math.random() * (deadContent.length + 1))
        deadContent.splice(realIndex, 0, real)

        console.log(deadContent.join(' '))
    }
}