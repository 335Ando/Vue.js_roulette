new Vue({
    el:'#app',
    data: {
        newName: '',
        resultName: '',
        timeoutId: 0,
        inactive_class: 'inactive',
        names: []
    },
    methods: {
        addName: function() {
            if(this.newName === "") {
               return;
            }else{
                this.names.push(this.newName);
                this.newName= '';
                this.inactive_class = '';
            };
        },
        deleteName: function(index) {
            if(confirm('削除してもいいですか？')) {
                this.names.splice(index,1);
            }
        },
        rouletteStart: function() {
            if(this.inactive_class === 'inactive') {
                return;
            }else{
            this.resultName = this.names[Math.floor(Math.random() * this.names.length)];
            this.timeoutId = setTimeout(() => {
                this.rouletteStart();
            },50);
        }
        },
        rouletteStop: function() {
            window.clearTimeout(this.timeoutId);
        },
        rouletteReset: function() {
            this.names = "";
        }

    }
});