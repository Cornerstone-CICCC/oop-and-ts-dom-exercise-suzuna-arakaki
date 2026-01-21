class Calculator {
  constructor() {
    this.num1 = document.getElementById('num1');
    this.num2 = document.getElementById('num2');
    this.operation = document.getElementById('operation');
    this.calculateBtn = document.getElementById('calculateBtn');
    this.resultSpan = document.getElementById('result');
    this.result = 0;

    this.calculateBtn.addEventListener('click', (e) => {
      e.preventDefault()
      this.calculate()
      this.render()
    });
  }

  calculate() {
    // e.preventDefault();
    if (this.operation.value === "add") {
      this.add();
    } else if (this.operation.value === "subtract") {
      this.subtract();
    } else if (this.operation.value === "multiply") {
      this.multiply();
    } else {
      this.divide();
    }
  }

  add() {
    const num1Value = Number(this.num1.value);
    const num2Value = Number(this.num2.value);
    this.result = num1Value + num2Value
  }

  subtract() {
    const num1Value = Number(this.num1.value);
    const num2Value = Number(this.num2.value);
    this.result = num1Value - num2Value
  }

  multiply() {
    const num1Value = Number(this.num1.value);
    const num2Value = Number(this.num2.value);
    this.result = num1Value * num2Value
  }

  divide() {
    const num1Value = Number(this.num1.value);
    const num2Value = Number(this.num2.value);
    this.result = num1Value / num2Value
  }

  render() {
    this.resultSpan.innerText = this.result;
  }
}

const calculator = new Calculator();