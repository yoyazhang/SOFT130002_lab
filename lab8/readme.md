设计文档
=====
## task1
实现左右键切换：拿到现在class为on的数字，进行判断，toNext切换到下一张，如果现在的图片数字为5，则下一张切换后数字标识应为1红，其余的
只要+1即可，toPre类似，是对1进行判断切换到5，其余-1即可。图片的变换逻辑其实是wrap的left是多少就对应显示哪张图。向下一张切换就是将现在的left减
600，先前一张就是+600，需要注意的是如果left的值到了0（即第一个图片）或3600（最后一张图片），额外判断出来并将left值设为-2400和-1200（而不是
之前的加减600），否则会一片空白。<br>
## task2
写了两个函数，分别是startAuto和endAuto，前者设置 autoplay = setInterval(toNextPic,2000)；后者clearInterval(autoplay)，此外额外调用一次startAuto就
实现了加载完页面立刻开始自动播放。接着对container（通过class拿到的图片容器）设置oonmouseover和onmouseleave事件处理器，前者设置endAuto函数，
后者是startAuto函数。<br>
## task3
本质上是对任务1改进了一下，对每个按钮设置切换函数，把现在on的按钮的class“on“取消，并对按下的按钮添加”on”class。图片切换就是每个按钮对应的图片换上，
wrapper.style.left = -600\*(i+1)+"px"; 找到left的数值和按钮i的关系就可以。
## task4
我解决的思路是把每一个td单元格内都加上一个type为text的input，其value初始设置为原单元格内的内容（黄山、北京……），然后将原本单元格的innerText设为""。
这样就实现了可以更改内容。然后自动取焦点在第一个字符前比较麻烦，首先对每个格子内的input设置一个计次器，并对input添加click的事件处理，如果此时的计次
器为0，就把光标提前到第一个字符前，并对计次器+1，这样在格子内反复修改点击时就不会自动提前；然后对input添加blur的事件处理，如果input失去了焦点（点到了
别的格子或者外面）那就把计次器重新设为0；


