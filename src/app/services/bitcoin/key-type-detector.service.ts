import { Injectable } from '@angular/core'
import * as bip39 from 'bip39'

@Injectable({
  providedIn: 'root'
})
export class KeyTypeDetectorService {

  detect(value: string): 'seed' | 'privateKey' | 'invalid' {
    const text = value.trim()
    const words = text.split(/\s+/)

    if ([12, 15, 18, 21, 24].includes(words.length) && this.validateSeed(words)) {
      return 'seed'
    }

    if (/^(5[HJK][1-9A-HJ-NP-Za-km-z]{49}|[KL][1-9A-HJ-NP-Za-km-z]{51})$/.test(text)) {
      return 'privateKey'
    }

    if (/^[0-9a-fA-F]{64}$/.test(text)) {
      return 'privateKey'
    }

    return 'invalid'
  }

  private validateSeed(words: string[]): boolean {
    return words.every(p => bip39.wordlists['english'].includes(p.toLowerCase()))
  }
}