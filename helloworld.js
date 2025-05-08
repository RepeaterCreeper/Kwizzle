
let questionBank = {
  questions: window.btoa(JSON.stringify([
    {
      header: "Evaluate the following expression:",
      body: `<pre><code>true || false</code></pre>`,
      type: 'boolean',
      answer: true
    },
    {
      header: "Evaluate the following expression:",
      body: `<pre><code>true && false</code></pre>`,
      type: 'boolean',
      answer: false
    },
    {
      header: "Evaluate the following expression:",
      body: `<pre><code>!true</code></pre>`,
      type: 'boolean',
      answer: false
    },
    {
      header: "Evaluate the following expression:",
      body: `<pre><code>!false</code></pre>`,
      type: 'boolean',
      answer: true
    },
    {
      header: "Evaluate the following expression:",
      body: `<pre><code>!(true && false)</code></pre>`,
      type: 'boolean',
      answer: true
    },
    {
      header: "Evaluate the following expression:",
      body: `<pre><code>!(true || false)</code></pre>`,
      type: 'boolean',
      answer: false
    },
    {
      header: "Evaluate the following expression:",
      body: `<pre><code>!(true || true)</code></pre>`,
      type: 'boolean',
      answer: false
    },
    {
      header: "Evaluate the following expression:",
      body: `<pre><code>true && !true</code></pre>`,
      type: 'boolean',
      answer: false
    },
    {
      header: "Evaluate the following expression:",
      body: `<pre><code>true || !false</code></pre>`,
      type: 'boolean',
      answer: true
    },
    {
      header: "Determine the output of the following code:",
      body: `<pre><code>
                  let a = true;
                  let b = false;
                  console.log(a && b);    
              </code></pre>`,
      type: 'input',
      answer: false
    },
    {
      header: "Determine the output of the following program:",
      body: `<pre><code>
                if(true) {
                  console.log(true);
                }
                else {
                  console.log(false);
                }
              </code></pre>`,
      type: 'input',
      answer: true
    },
    {
      header: "Determine the output of the following program:",
      body: `<pre><code>
                if(false) {
                  console.log(true);
                }
                else {
                  console.log(false);
                }
              </code></pre>`,
      type: 'input',
      answer: false
    },
    {
      header: "Determine the output of the following program:",
      body: `<pre><code>
                let a = false;
                if(a) {
                  console.log("Passed");
                }
                else {
                  console.log("Failed");
                }
              </code></pre>`,
      type: 'input',
      answer: 'Failed'
    },
    {
      header: "Determine the output of the following program:",
      body: `<pre><code>
                let a = false;
                let b = false;
                let c = a && b;
                if(c) {
                  console.log("I am Here");
                }
                else {
                  console.log("Not There");
                }
              </code></pre>`,
      type: 'input',
      answer: 'Not There'
    },
    {
      header: "What is this operator called?",
      body: `||`,
      type: 'input',
      answer: 'OR'
    },
    {
      header: "What is this operator called?",
      body: `&&`,
      type: 'input',
      answer: 'AND'
    },
    {
      header: "What is this operator called?",
      body: `!`,
      type: 'input',
      answer: 'NOT'
    },
    {
      header: "What is the final value of the `a` variable?",
      body: `<pre><code>
        let a = 5;
        a = 3;
        a + 1
      </code></pre>`,
      type: 'input',
      answer: 3
    },
    {
      header: "What is the final value of the `c` variable?",
      body: `<pre><code>
        let a = 5;
        a = 3;
        let c = a + 1;
      </code></pre>`,
      type: 'input',
      answer: 4
    },
    {
      header: "What is the final value of the `d` variable?",
      body: `<pre><code>
        let a = 5;
        let d = a + 1;
        let c = d + 2;
      </code></pre>`,
      type: 'input',
      answer: 8
    },
    {
      header: "Access the name property of the `a` variable",
      body: `<pre><code>
        let a = {
          name: "Joseph Chua",
          meta: {
            grades: [32, 44, 98]
          }
        }
      </code></pre>`,
      type: 'input',
      answer: {
        expression: `let a = {
          name: "Joseph Chua",
          meta: {
            grades: [32, 44, 98]
          }
        }; return {userAnswer} == 'Joseph Chua')`
      }
    },
    {
      header: "Access the 3rd element of the `grades` property in the `a` variable",
      body: `<pre><code>
        let a = {
          name: "Joseph Chua",
          meta: {
            grades: [32, 44, 98]
          }
        }
      </code></pre>`,
      type: 'input',
      answer: {
        expression: `let a = {
          name: "Joseph Chua",
          meta: {
            grades: [32, 44, 98]
          }
        }; return {userAnswer} == 98)`
      }
    }
  ]))
};