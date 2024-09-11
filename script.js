let question1 = prompt('ჩაწერეთ თქვენი სახელი')
        let question2 = prompt('ჩაწერეთ თქვენი პაროლი')

      function approve(){

        if(question1=='admin' && question2 == '1234'){
            console.log('Hello Admin');
        }
        else {
            console.log('Hello Guest')
        }

      }  
      approve()
