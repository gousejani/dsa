class TrieNode {
  val: string;
  terminus: boolean;
  children: TrieNode[];

  constructor(char: string) {
    this.val = char;
    this.terminus = false;
    this.children = [];
  }

  add(word: string) {
    if (word.length == 0) {
      this.terminus = true;
      return;
    }

    let val = word[0];
    let nextWord = word.substring(1);
    let child: TrieNode | null = null;
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].val == val) {
        child = this.children[i];
        break;
      }
    }

    if (child === null) {
      child = new TrieNode(val);
      this.children.push(child);
    }

    child.add(nextWord);
  }

  complete(
    word: string,
    children: TrieNode[] = this.children,
    nextWord?: string
  ): string[] {
    if (word.length == 0) {
      return [];
    }

    if (!nextWord) {
      nextWord = word;
    }

    let val = nextWord[0];
    nextWord = nextWord.substring(1);

    for (let i = 0; i < children.length; i++) {
      if (children[i].val == val) {
        if (nextWord.length == 0) {
          return this._makeSuggestions(word, children[i]);
        } else {
          return this.complete(word, children[i].children, nextWord);
        }
      }
    }

    return [];
  }

  _makeSuggestions(word: string, child: TrieNode, suggestions: string[] = []) {
    if (child.terminus) {
      suggestions.push(word);
    }

    for (let i = 0; i < child.children.length; i++) {
      let c = child.children[i];
      this._makeSuggestions(word.concat(c.val), c, suggestions);
    }

    return suggestions;
  }
}

export class Trie {
  _root: TrieNode;
  constructor() {
    this._root = new TrieNode("");
  }

  add(word: string) {
    this._root.add(word);
  }

  complete(word: string) {
    return this._root.complete(word);
  }
}
