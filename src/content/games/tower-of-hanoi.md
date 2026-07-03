---
title: "Tower of Hanoi"
shortTitle: "Tower of Hanoi"
slug: "tower-of-hanoi"
description: "Move the entire stack of disks to another peg. Larger disks cannot go on smaller ones. 3-6 disk levels. Classic recursion puzzle."
category: "logic"
difficulty: "variable"
order: 30
seoTitle: "Free Tower of Hanoi Game Online — Classic Logic Puzzle"
seoDescription: "Play Tower of Hanoi online. Move disks between pegs. Larger disks cannot go on smaller ones. 3-6 disk levels. Classic brain training puzzle."
keywords: ["tower of hanoi", "hanoi puzzle", "disk puzzle", "logic puzzle", "recursion", "brain training", "classic puzzle"]
heroColor: "#7C4DFF"
icon: "🗼"
componentName: "TowerOfHanoi"
scoreType: "score"
scoreUnit: "points"
lowerIsBetter: false
hasTimer: false
faq:
  - question: "What are the rules of Tower of Hanoi?"
    answer: "Move all disks from the left peg to the right peg. You can only move one disk at a time. A larger disk cannot be placed on top of a smaller disk. Click a peg to pick up the top disk, then click another peg to place it."
  - question: "What's the minimum number of moves?"
    answer: "The minimum moves required is 2^n - 1, where n is the number of disks. For 3 disks: 7 moves. 4 disks: 15 moves. 5 disks: 31 moves. 6 disks: 63 moves."
  - question: "What's the best strategy?"
    answer: "For an even number of disks, make the first move to the middle peg. For odd, move to the right peg. The recursive pattern: move n-1 disks to the auxiliary peg, move the largest disk, then move n-1 disks to the target."
tips:
  - "For even disks: first move to middle peg. For odd: first move to right peg"
  - "The recursive pattern: move the stack, move the big one, move the stack back"
  - "Never place a larger disk on a smaller one"
  - "Start with 3 disks to learn the pattern, then increase difficulty"
tutorial:
  title: "How to Play Tower of Hanoi"
  steps:
    - step: 1
      instruction: "Click a peg to select the top disk. It will lift up."
    - step: 2
      instruction: "Click another peg to place the disk. Larger disks cannot go on smaller ones."
    - step: 3
      instruction: "Move all disks from the left peg to the right peg."
    - step: 4
      instruction: "Choose 3-6 disks. Try to solve in the minimum number of moves!"
relatedGames: ["logic-grid", "iq-puzzle"]
---
## About Tower of Hanoi

The Tower of Hanoi was invented in 1883 by French mathematician Édouard Lucas. The puzzle was accompanied by a legend: in a temple in Benares, priests were moving 64 golden disks according to the same rules. When they finish, the world will end. At one move per second, that would take about 585 billion years.

### Mathematical Elegance

The Tower of Hanoi is a perfect demonstration of recursive thinking. The solution for n disks is elegantly simple: move n-1 disks to the auxiliary peg, move the largest disk to the target, then move n-1 disks to the target. This recursive structure makes it a classic example in computer science education.