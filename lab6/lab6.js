/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime(){
    function Counter(){
        let count = 0;
        this.getCount = function () {
            return count;
        };
        this.addCount = function () {
            return count++;
        }
    }
    (function(){
        let i = 1;
        let count = new Counter();
        let double = function() {
            i *= 2;
            count.addCount();
            console.log("now it is "+i);
        };
        let t1 = setInterval(double,5000);
        setInterval(function () {
            let timeOut = new Date().getSeconds()%60===0;
            let countOut = count.getCount() === 10;
            if(countOut|| timeOut){
                clearInterval(t1);
                let result = "now it is "+ i + ", 计数为"+ count.getCount() + "次，"+ (timeOut?"它因时间到达整分钟而提前停止":"它没有提前停止");
                console.log(result);
                clearInterval(this);
            }
        },1000);
    })();
}

function testTime2(){

}

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    let telephonePattern = /\d{11}/g;
    let mailPattern = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/g;
    let telephoneResult = telephonePattern.test(telephone);
    let mailResult = mailPattern.test(mail);
    let result = "The telephone is "+ (telephoneResult?"right":"wrong")+" and the mail is "+(mailResult?"right":"wrong")+"!";
    console.log(result);
}

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    let repeatPattern = /\b(\w+)\b\s\1\b/gi;
    let repeatArray = [];/\b(\w+)\b\s\1\b/gi
    let result = repeatPattern.exec(str);
    while(result !== null){
        repeatArray[repeatArray.length] = result[0];
        repeatPattern.lastIndex = result.index + (result[0].length+1)/2;
        result = repeatPattern.exec(str);
    }
    repeatArray.sort(function (value1,value2) {
        value1 = value1.toLowerCase();
        value2 = value2.toLowerCase();
        if(value1 < value2){
            return -1;
        }
        else if(value1 > value2){
            return 1;
        }
        else{
            return 0;
        }
    });
    let repeatWords = new Set();
    for(let i = 0;i < Math.min(repeatArray.length,10);i++){
        repeatWords.add(repeatArray[i]);
    }
    console.log(repeatWords);
}


/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    wantInput = wantInput.toUpperCase();
    actualInput = actualInput.toUpperCase();
    let wantSet = new Set(wantInput);
    let actualSet = new Set(actualInput);
    let brokenKey = new Set();
    for(let key of wantSet){
        if(!actualSet.has(key)){
            brokenKey.add(key);
        }
    }
    console.log(brokenKey);
}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    let strArray = (str.trim()).split(/\s+/g);
    let resultStr = "";
    for(let i = strArray.length-1;i >= 0;i--){
        resultStr = resultStr + strArray[i] + " ";
    }
    console.log(resultStr);
}

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    let numsMap = new Map();
    let answer = [];
    for(let i = 0;i < nums.length;i++){
        numsMap.set(nums[i],i);
        if(numsMap.has(target-nums[i])){
            answer[answer.length] = [numsMap.get(target-nums[i]),i];
        }
    }
    if(answer.length === 0) console.log("No answer");
    else console.log(answer);
}


/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    if(str === ""){
        console.log("0");
    }
    let curLength = 0;
    let maxLength = 0;
    let stringIndex = new Map();
    for(let i = 0;i < str.length;i++){
        if(stringIndex.has(str.charAt(i))){
            let d = i - stringIndex.get(str.charAt(i));
            if(d > curLength){
                curLength++;
            }
            else{
                curLength = d;
            }
        }
        else{
            curLength++;
        }
        stringIndex.set(str.charAt(i),i);
        if(curLength >= maxLength){
            maxLength = curLength;
        }
    }
    console.log(maxLength);
}

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}
//发展中国家
function DevelopingCountry() {
    Country.call(this);
    this.name = "发展中国家";
    this.sayHi = function () {
        console.log("Hi,i am a developing country.");
    }
}
//不发达国家
function PoorCountry(){
    this.name = "不发达国家";
}
PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad = function () {
    console.log("I am a sad poor country.");
};
//发达国家
let DevelopedCountry = Object.create(Country,{
    name: {
        value: "发达国家"
    }
});
DevelopedCountry.sayHappy = function(){
    console.log("I am a Happy developed country.");
};

(function test() {
    //NO.1 wrong
    testTime();
    //NO.2
    testMail("13331892815","2449278392@qq.com");
    testMail("zsdfdf11333","2449278392@qq.com");
    testMail("13331892815","2449278392@qq.");
    testMail("zsdfdf11333","2449278392@qq.");
    //NO.3
    testRedundancy("Is is the iS is cost of of gasoline going up up");
    testRedundancy("Is is iS the iS is cost of of gasoline going up up");
    testRedundancy("test TEST ta ta ia ia biu biu la la er er we we qw qw tg tg iu iu io io");
    //NO.4
    testKeyBoard("7_This_is_a_test","_hs_s_a_es");
    //NO.5
    testSpecialReverse("the sky is blue");
    testSpecialReverse("    hello    world!    ");
    //NO.6
    twoSum([2,3,4,5,6],9);
    twoSum([2, 7, 11, 15],9);
    twoSum([2, 7, 11, 15,2],9)
    twoSum([2,7,11,15,4,7,2],9);
    //NO.7 wrong
    lengthOfLongestSubstring("abbbbbb");
    lengthOfLongestSubstring("bbbbbb");
    lengthOfLongestSubstring("abcdavwefg");
    //NO.8
    let developingCountry1 = new DevelopingCountry();
    developingCountry1.sayHi();
    let poorCountry1 = new PoorCountry();
    poorCountry1.saySad();
    DevelopedCountry.sayHappy();
})();
