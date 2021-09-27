import route from '../../common/route.js'
export default {
    data: {
        score: 0,
        realWord:'',
        userInput:''
    },onInit() {
    },
    back(){
        route.routePlay()
    }
}