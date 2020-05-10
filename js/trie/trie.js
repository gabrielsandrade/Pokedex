class Node {
    constructor(value){
        this.father = 0;
        this.children = [];
        this.isWord = false;
        this.value = value;
    }
}

root = new Node();

function insertWords(node, word) {  
    console.log(word);  
    let currentNode = node;
    for (let i = 0; i < word.length; i++){
        let includes = false;
        for (var child of currentNode.children){
            if (child.value == word[i]){
                includes = true;
                currentNode = child;
                break;
            }
        }
        if (includes == false){
            node = new Node(word[i]);
            node.father = currentNode;
            node.isWord = i == word.length - 1? true : false;
            currentNode.children.push(node);
            console.log("I've insert the letter", node.value, "to the father ", currentNode.value);
            currentNode = node;
        }else {
            console.log("I didn't insert the letter", word[i], "to the father ", currentNode.father.value);
        }
    }
}

function checkWord(word){
    let currentNode = root;
    console.log(word);
    for (let i = 0; i < word.length; i++){
        let include = false;
        for(var child of currentNode.children){
            if(child.value == word[i]){
                include = true;
                currentNode = child;
                break;
            }
        }
        if (include == false){
            return false;
        }
    }
    let x = currentNode.isWord;
    return x;
}

const words = ["CAR", "DONE", "CAT", "CATTERINE", 'CARD', "DOG"];
for (let word of words){
    insertWords(root, word);
}

for (let word of words){
    console.log(x = checkWord(word) ? "It's a word" : "It's not a word");
}
console.log(x = checkWord("Casa") ? "It's a word" : "It's not a word");