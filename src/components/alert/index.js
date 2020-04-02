import Vue from 'vue'
import MessageBox from './messageBox'

export var messageBox = (function() {
    var defaults = {
        title: "",
        content: "",
        cancel: "",
        ok: "",
        handleCancel: null,
        handleOk: null
    };

    var myComponent = Vue.extend(MessageBox);

    return function(opts) {
        for (var attr in opts) {
            defaults[attr] = opts[attr]
        }



        var vm = new myComponent({
            el: document.createElement("div"),
            data: {
                title: defaults.title,
                content: defaults.content,
                ok: defaults.ok,
                cancel: defaults.cancel
            },
            methods: {
                handleCancel() {
                    console.log(this);
                    defaults.handleCancel && defaults.handleCancel.call(this) //这里是改变this指向问题
                    document.body.removeChild(vm.$el)
                },
                handleOk() {
                    defaults.handleOk && defaults.handleOk.call(this) //拿到vm这个对象，handleOk可以拿到vm这个对象
                    document.body.removeChild(vm.$el)
                }
            }
        })
        document.body.appendChild(vm.$el)
    }
})();