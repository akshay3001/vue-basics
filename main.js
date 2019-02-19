Vue.component('my-custom-component', {
    props: ['customComponentList'],
    template: `<h2>{{ customComponentList.name }}</h2>`
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

new Vue({
    el: '#vueApp',
    data: {
        greet: 'Welcome',
        showHeader: true,
        showSection: false,
        names: [{
                name: 'Akshay',
                index: 1
            },
            {
                name: 'Akshay',
                index: 2
            }
        ],
        name: '',
        customComponentList: [{
                id: 1,
                name: 'todo-item'
            },
            {
                id: 2,
                name: 'my-custom-component'
            }
        ],
        groceryList: [{
                id: 0,
                text: 'Vegetables'
            },
            {
                id: 1,
                text: 'Cheese'
            },
            {
                id: 2,
                text: 'Whatever else humans are supposed to eat'
            }
        ],
        counter: 0,
        increaseComputedCount: 0,
        increaseMethodCount: 0,
        testCounter: 0,
        clicked : false,
        phones: [
            {name:'iPhone', model:'XS'},
            {name:'Samsung', model:'S9'},
            {name:'Razor', model:'1'},
            {name:'LG', model:'30'},
        ]
    },
    computed: {
        
    },
    methods: {
        welcome: function () {
            //this.greet = e.target.value;
            alert(this.greet);
            this.showSection = true;
        },
        increment: function(step){
            //this.counter += 1;
            this.counter += step;
        },
        test: function(){
            return this.testCounter++;
            // this.greet;
        }
    }
});