import vibrator from '@system.vibrator';
import route from '../../common/route.js'
export default {
    data: {
        words: [
            "sos",
            "car",
            "help",
            "purple",
            "fix",
            "lamb",
            "yawn",
            "huawei",
            "trouble"
        ],
        dict: [
            {key:"a"    ,val:'.-'},
            {key:"b"    ,val:'-...'},
            {key:"c"    ,val:'-.-.'},
            {key:"d"	,val:"-.."},
            {key:"e"    ,val:"."},
            {key:"f"	,val:"..-."},
            {key:"g"	,val:"--."},
            {key:"h"	,val:"...."},
            {key:"i"	,val:".."},
            {key:"j"	,val:".---"},
            {key:"k"	,val:"-.-"},
            {key:"l"	,val:".-.."},
            {key:"m"	,val:"--"},
            {key:"n"	,val:"-."},
            {key:"o"	,val:"---"},
            {key:"p"	,val:".--."},
            {key:"q"	,val:"--.-"},
            {key:"r"	,val:".-."},
            {key:"s"	,val:"..."},
            {key:"t"	,val:"-"},
            {key:"u"	,val:"..-"},
            {key:"v"	,val:"...-"},
            {key:"w"	,val:".--"},
            {key:"x"	,val:"-..-"},
            {key:"y"	,val:"-.--"},
            {key:"z"	,val:"--.."},
            {key:"."	,val:".-.-.-"},
            {key:","	,val:"--..--"},
            {key:"?"	,val:"..--.."},
            {key:"-"	,val:"-....-"},
            {key:"/"	,val:"-..-."},
            {key:"0"	,val:"-----"},
            {key:"1"	,val:".----"},
            {key:"2"	,val:"..---"},
            {key:"3"	,val:"...--"},
            {key:"4"	,val:"....-"},
            {key:"5"	,val:"....."},
            {key:"6"	,val:"-...."},
            {key:"7"	,val:"--..."},
            {key:"8"	,val:"---.."},
            {key:"9"	,val:"----."}
        ],
        word:'',
        morse:'',
        answer:'',
        index:0,

        timeout:null,

        play:true,
        space:false,
        dot:false,
        dash:false
    },
    onInit(){
        this.morse=''
        this.answer=''
        this.getRandomWord()
    },
    getRandomWord(){
       let i = Math.floor(Math.random()*9)
       this.word = this.words[i]
       this.answer = this.wordToMorse(this.word)
    },
    addDot() {
        this.morse = this.morse.concat('.')
        this.play = false
        this.dot = true
        let _this = this
        setTimeout(function(){
            _this.dot = false
            _this.play = true
        },500)
    },
    addDash() {
        this.morse = this.morse.concat('-')
        this.play = false
        this.dash = true
        let _this = this
        setTimeout(function(){
            _this.dash = false
            _this.play = true
        },500)
    },
    showResult(){
        if(this.index < this.answer.length){
            let _this = this
            var c = _this.answer[_this.index]
            _this.showMorseSignal(c)
            _this.index++
            _this.timeout = setTimeout(function(){
                    _this.showResult()
            },2200)
        }
        else{
            this.index=0
            this.cancelAnimation()
        }
    },
    showMorseSignal(c){
        this.play = false
        this.space = false
        this.dot = false
        this.dash = false
        if(c=='.'){
            this.dot = true
            this.vibrate('.')
        }
        if(c=='-'){
            this.dash = true
            this.vibrate('-')
        }
        if(c ==' '){
            this.space = true
        }
    },
    addSpace(){
        this.morse = this.morse.concat(' ')
    },
    cancelAnimation(){
        clearTimeout(this.timeout)
        this.play = true
        this.dot = false
        this.dash = false
        this.space = false
    },
    calculateScore(){
        var equivalency = 0;
        var minLength = (this.morse.length > this.answer.length) ? this.answer.length : this.morse.length;
        var maxLength = (this.morse.length < this.answer.length) ? this.answer.length : this.morse.length;
        for(var i = 0; i < minLength; i++) {
            if(this.morse[i] == this.answer[i]) {
                equivalency++;
                continue
            }
        }
        var input = this.morseToWord(this.morse)
        var word = this.word
        var weight = equivalency / maxLength;
        weight = Math.floor(weight*100)
        route.routeScore(weight,word,input)
    },
    morseToWord(code){
        var word = ''
        let _this = this
        var charCodes = code.split(' ')
        for(var i=0; i< charCodes.length;i++){
            for(var j = 0; j< _this.dict.length;j++){
                if(charCodes[i]==_this.dict[j].val){
                    word = word.concat(_this.dict[j].key)
                    break
                }
            }
        }
        return word
    },
    wordToMorse(word){
        var code = ''
        let _this= this
        for (var i = 0; i < _this.word.length; i++) {
            for (var j = 0; j < _this.dict.length; j++) {
                if(word[i]==_this.dict[j].key){
                    code = code.concat(_this.dict[j].val)
                    if(i != _this.word.length-1){
                        code = code.concat(' ')
                    }
                    break
                }
            }
        }
        return code
    },
    vibrate(type) {
        if(type=='.'){
            vibrator.vibrate({
             mode: 'short',
             success() {
                 console.log('success to vibrate the device every 1000 steps completed');
             },
             fail(data, code) {
                 console.log('handle fail, data = '+data+', code = '+code);
             },
         });
        }
        if(type=='-'){
            vibrator.vibrate({
                mode: 'long',
                success() {
                    console.log('success to vibrate the device every 1000 steps completed');
                },
                fail(data, code) {
                    console.log('handle fail, data = '+data+', code = '+code);
                },
            });
        }
    },
    touchMove(e){
        if(e.direction == "left")
        {
            route.routeMorseList()
        }
        if(e.direction == "right")
        {
            route.routeMain()
        }
    }
}
