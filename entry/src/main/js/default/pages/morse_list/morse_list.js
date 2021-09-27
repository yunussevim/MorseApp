import route from '../../common/route.js'
export default {
    data: {
        dict: [
            {key:"a"    ,val:". -"},
            {key:"b"    ,val:"- . . ."},
            {key:"c"    ,val:"- . - ."},
            {key:"d"	,val:"- . ."},
            {key:"e"    ,val:"."},
            {key:"f"	,val:". . - ."},
            {key:"g"	,val:"- - ."},
            {key:"h"	,val:". . . ."},
            {key:"i"	,val:". ."},
            {key:"j"	,val:". - - -"},
            {key:"k"	,val:"- . -"},
            {key:"l"	,val:". - . ."},
            {key:"m"	,val:"- -"},
            {key:"n"	,val:"- ."},
            {key:"o"	,val:"- - -"},
            {key:"p"	,val:". - - ."},
            {key:"q"	,val:"- - . -"},
            {key:"r"	,val:". - ."},
            {key:"s"	,val:". . ."},
            {key:"t"	,val:"-"},
            {key:"u"	,val:". . -"},
            {key:"v"	,val:". . . -"},
            {key:"w"	,val:". - -"},
            {key:"x"	,val:"- . . -"},
            {key:"y"	,val:"- . - -"},
            {key:"z"	,val:"- - . ."},
            {key:"."	,val:". - . - . -"},
            {key:","	,val:"- - . . - -"},
            {key:"?"	,val:". . - - . ."},
            {key:"-"	,val:"- . . . . -"},
            {key:"/"	,val:"- . . - ."},
            {key:"0"	,val:"- - - - -"},
            {key:"1"	,val:". - - - -"},
            {key:"2"	,val:". . - - -"},
            {key:"3"	,val:". . . - -"},
            {key:"4"	,val:". . . . -"},
            {key:"5"	,val:". . . . ."},
            {key:"6"	,val:"- . . . ."},
            {key:"7"	,val:"- - . . ."},
            {key:"8"	,val:"- - - . ."},
            {key:"9"	,val:"- - - - ."}
        ]
    },
    touchMove(e){
        if(e.direction == "right")
        {
            route.routePlay()
        }
    }
}
