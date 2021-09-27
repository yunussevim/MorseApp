import router from '@system.router';
export default{
    routePlay(){
        router.replace({
            uri: 'pages/play/play'
        })
    },
    routeMorseList(){
        router.replace({
            uri:'pages/morse_list/morse_list'
        })
    },
    routeIndex(){
        router.replace({
            uri:'pages/index/index'
        })
    },
    routeMain(){
        router.replace({
            uri:'pages/main/main'
        })
    },
    routeScore(weight,word,input){
        router.replace({
            uri: 'pages/score/score',
            params: {
                score:weight,
                realWord:word,
                userInput:input
            },
        })
    },
}