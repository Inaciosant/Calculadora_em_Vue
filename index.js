const app = Vue.createApp({
    data() {
        return {
            display: '0',
            currentNumber: '',
            previousNumber: null,
            operator: null,
            isNewCalculation: false
        };
    },
    methods: {
        appendNumber(number) {
            if (this.isNewCalculation) {
                this.display = '';
                this.isNewCalculation = false;
            }
            this.currentNumber += number;
            this.display = this.currentNumber;
        },
        setOperator(operator) {
            this.operator = operator;
            this.previousNumber = parseFloat(this.currentNumber);
            this.currentNumber = '';
        },
        calculate() {
            let result = 0;
            const current = parseFloat(this.currentNumber);

            switch (this.operator) {
                case '+':
                    result = this.previousNumber + current;
                    break;
                case '-':
                    result = this.previousNumber - current;
                    break;
                case 'x':
                    result = this.previousNumber * current;
                    break;
                case '/':
                    result = this.previousNumber / current;
                    break;
                default:
                    return;
            }

            this.display = result.toString();
            this.isNewCalculation = true;
            this.currentNumber = result.toString();
            this.previousNumber = null;
            this.operator = null;
        },
        clear() {
            this.display = '0';
            this.currentNumber = '';
            this.previousNumber = null;
            this.operator = null;
        }
    }
});

app.mount('#app');
