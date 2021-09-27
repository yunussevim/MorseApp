import route from '../../common/route.js'
export default {
    data: {
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
        index:0,

        timeout:null,

        play:true,
        space:false,
        dot:false,
        dash:false
    },
    onInit(){
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
        this.word = this.morseToWord(this.morse)
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
        this.word = this.morseToWord(this.morse)
    },
    addSpace(){
        this.morse = this.morse.concat(' ')
        this.word = this.morseToWord(this.morse)
    },
    addSlash(){
        this.morse = this.morse.concat(' / ')
        this.word = this.morseToWord(this.morse)
    },
    morseToWord(code){
        var word = ''
        var isExist = false
        let _this = this
        var charCodes = code.split(' ')
        for(var i=0; i< charCodes.length;i++){
            if(charCodes[i]=='/'){
                word = word.concat(' ')
            }
            else{
                isExist = false
                for(var j = 0; j< _this.dict.length;j++){
                    if(charCodes[i]==_this.dict[j].val){
                        word = word.concat(_this.dict[j].key)
                        isExist = true
                        break
                    }
                }
                if(!isExist && charCodes[i]!=''){
                    word = word.concat('|err|')
                }
            }
        }
        return word
    },
    touchMove(e){
        if(e.direction == "left")
        {
            route.routePlay()
        }
        if(e.direction == "right")
        {
            route.routeIndex()
        }
    }
}
