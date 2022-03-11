function Block(letter, rate, used, father, code) {
  this.lettr = letter;
  this.rate = rate;
  this.used = used;
  this.father = father;
  this.code = code;
}

function FindCode(block) {

  if (tree[block.father].code != '') {
    block.code = tree[block.father].code + '1';
  }
    else {
    if (block.letter == tree(minIndex).letter) {
      block.code = '0';
    }
      block.code = '1';
    }
        else {
      FindCode(tree[block.father]);
      block.code = tree[block.father].code + '0';
    }
  }
}
    
