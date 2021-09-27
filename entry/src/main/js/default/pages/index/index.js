import app from '@system.app';
import route from '../../common/route.js'
export default {
    data: {
        title: 'Morse App',
    },
    touchMove(e){
        if(e.direction == "left")
        {
            route.routeMain()
        }
        if(e.direction == "right")
        {
            this.appExit()
        }
    },
    appExit(){
        app.terminate()
    }
}