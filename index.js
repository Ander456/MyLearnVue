var app = new Vue({
    el: "#app",
    data: {
        message: "hello world"
    }
});

var app2 = new Vue({
    el: "#app2",
    data: {
        message: "页面家在于 " + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: "#app3",
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: "#app4",
    data: {
        todos: [{
            text: "学习javascript"
        },
        {
            text: "学习vue"
        },
        {
            text: "整个牛项目"
        }
        ]
    }
});

var app5 = new Vue({
    el: "#app5",
    data: {
        message: "Hello Vue.js"
    },
    methods: {
        reserveMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

var app6 = new Vue({
    el: "#app6",
    data: {
        message: "hello!"
    }
});

Vue.component("todo-item", {
    props: ["todo"],
    template: "<li>{{todo.text}}</li>"
});

var app7 = new Vue({
    el: "#app7",
    data: {
        groceryList: [{
            id: 0,
            text: "蔬菜"
        },
        {
            id: 1,
            text: "水果"
        },
        {
            id: 2,
            text: "奶酪"
        },
        ]
    }
});


var vm = new Vue({
    data: {
        a: 1
    },
    created: function () {
        console.log("a is: ", this.a);
    },
    mounted: function () {
        console.log("mounted: ", this.a);
    },
    updated: function () {
        console.log("updated: ", this.a);
    },
    destroyed: function () {
        console.log("destroyed: ", this.a);
    },
});

var vm1 = new Vue({
    el: "#example1",
    data: {
        message: "hello"
    },
    computed: {
        reversedMessage: function () {
            return this.message.split("").reverse().join("");
        }
    }
});

const Foo = {
    template: '<div>foo</div>'
}
const Bar = {
    template: '<div>bar</div>'
}

const routes = [{
    path: '/foo',
    component: Foo
},
{
    path: '/bar',
    component: Bar
}
]

const router = new VueRouter({
    routes
})

const app11 = new Vue({
    router
}).$mount('#app11')

