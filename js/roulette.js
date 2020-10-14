new Vue({
    el:'#app',
    data: {
        newName: '',
        resultName: '',
        // timeoutId: 0,
        names: []
    },
    methods: {
        addName: function() {
            if(this.newName === "") {
               return;
            }else{
                this.names.push(this.newName);
                this.newName= '';
            }
        },
        deleteName: function(index) {
            if(confirm('削除してもいいですか？')) {
                this.names.splice(index,1);
            }
        },
        rouletteStart: function() {
            this.resultName = this.names[Math.floor(Math.random() * this.names.length)];
            this.timeoutId = setTimeout(() => {
                this.rouletteStart();
            },50);
        },
        rouletteStop: function() {
            // clearTimeout(this.timeoutId);
        },
        rouletteReset: function() {
            
        }

    }
});