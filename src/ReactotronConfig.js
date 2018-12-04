import Reactotron from "reactotron-react-native";
import {reactotronRedux} from "reactotron-redux";

export default Reactotron
    .configure({name: "match"}) // Reactotronに表示するアプリ名
    .configure({ host: "172.16.18.14" }) // ローカルIPアドレスの登録
    .use(reactotronRedux()) // Reduxと統合することを宣言
    .connect(); // おまじない的な

    console.log = (...args) =>
        Reactotron.display({
            name: args[1] || 'CONSOLE.LOG',
            value: args[0],
            preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
        });
