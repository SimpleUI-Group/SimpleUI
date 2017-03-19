import SimpleUI from './components/index';
import Style from './styles/index';

export default {
    install(Vue, options) {
        //to do
        Object.keys(SimpleUI).forEach((key) => {
            Vue.component(key, SimpleUI[key]);
        });

        // Vue.prototype.$Loading = LoadingBar;
        // Vue.prototype.$Message = Message;
        // Vue.prototype.$Modal = Modal;
        // Vue.prototype.$Notice = Notice;


        // auto install
        if(typeof window !== 'undefined' && window.Vue) {
            this.install(window.Vue);
        }
    },
    init(args) {
        debugger;
        if(args['rem'] === false) {
            Style.init(0);
            return;
        }

        if(args['ui']) {
            Style.init(args['rem'], args['ui']);
            return;
        }
    }
}