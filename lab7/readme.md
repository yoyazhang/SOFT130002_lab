设计文档
=====
## 困难
1. 第一个问题是看完周一的课程量看完完全不知道lab怎么写，以为是document.write()解决一切（后来发现有这种误解的还很多）
2. 一开始写完发现popular photos和作者信息在一个格子里，图片只有一张，整个genre也只有一个（即最后一个coco的）
## 解决方案
1. 把4-1、4-2提前都看完了，再看了看书和lab需求文档的教程链接
2. 检查了一下，发现popular photos和authors在同一个div里，我发现不是document.create()一个div、然后之后每个div都等于这个create出来的
div就够了，因为这样的话其实全都指向了同一个div，并且在文档里也只有这么一个，这就导致了最后展示出来只有最后一个框、图片也只有一个的问题。
解决的方法就是就是每个都要create一次。（如h3Authors[i] = document.createElement("h3"); h5Lives[i] = document.createElement("h5");其实根
本问题应该还是对dom理解不到位……产生了一些误解