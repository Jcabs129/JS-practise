let tree;

function setup() {
  noCanvas();
  tree = new Tree();
  let n = new Node(5);
  tree.addNode(n);
  
  console.log(tree)
}

function Tree() {
  this.root == null;
}

// Tree now have all methods with JS library .prototype
Tree.prototype.addNode = function(n) {
  if (this.root = null) {
    this.root = null;
  }
  
}

function Node(val) {
  this.value = val
  this.left = null;
  this.right = null;
}