// Binary Tree
// Part 1: https://youtu.be/ZNH0MuQ51m4
// Part 2: https://youtu.be/KFEvF_ymuzY

let tree;

function setup() {
  // noCanvas();
  tree = new Tree();
  for(let i = 0; i < 10; i++) {
    tree.addValue(floor(random(0, 100)));
  }
  console.log(tree)
  tree.traverse();
}