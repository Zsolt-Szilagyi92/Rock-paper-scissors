function game() {

  document.getElementById("rockPng").addEventListener("click", function() {
    console.log('Player choosed rock');

    var computer = Math.round(Math.random() * 3);

    if (computer === 0) {
      console.log('Computer choosed rock');
      document.getElementById('winnerIs').innerHTML = ('Computer choosed rock');
    } 
    else if (computer === 1) {
      console.log('Computer choosed paper');
      document.getElementById('winnerIs').innerHTML = ('Computer choosed paper');
    } 
    else {
      console.log('Computer choosed scissors');
      document.getElementById('winnerIs').innerHTML = ('Computer choosed scissors');
    }

    var x = document.getElementById("rockPng");
    x.value = 0;

    if (x.value === computer) {
      console.log('Tie!');
      document.getElementById('total').innerHTML = ('Tie');
    } 
    else if (x.value > 1 && computer < 1) {
      console.log('Computer wins!');
      document.getElementById('total').innerHTML = ('Computer wins!');
    } 
    else if (x.value < 1 && computer > 1) {
      console.log('Computer wins!');
      document.getElementById('total').innerHTML = ('Player wins!');
    } 
    else if (x.value > computer) {
      console.log('Player wins!');
      document.getElementById('total').innerHTML = ('Player wins!');
    } 
    else {
      console.log('Computer wins!')
      document.getElementById('total').innerHTML = ('Computer wins!');
    }
  });
    
  document.getElementById("paperPng").addEventListener("click", function() {
      console.log('Player choosed paper');

      var computer = Math.round(Math.random() * 3);

  if (computer === 0) {
    console.log('Computer choosed rock');
    document.getElementById('winnerIs').innerHTML = ('Computer choosed rock');
  } 
  else if (computer === 1) {
    console.log('Computer choosed paper');
    document.getElementById('winnerIs').innerHTML = ('Computer choosed paper');
  } 
  else {
    console.log('Computer choosed scissors');
    document.getElementById('winnerIs').innerHTML = ('Computer choosed paper');
  }

      var y = document.getElementById("paperPng");
      y.value = 1;

    if (y.value === computer) {
      console.log('Tie!');
      document.getElementById('total').innerHTML = ('Tie!');
    } 
    else if (y.value > 1 && computer < 1) {
      console.log('Computer wins!');
      document.getElementById('total').innerHTML = ('Computer wins!');
    } 
    else if (y.value < 1 && computer > 1) {
      console.log('Computer wins!');
      document.getElementById('total').innerHTML = ('Player wins!');
    } 
    else if (y.value > computer) {
      console.log('Player wins!');
      document.getElementById('total').innerHTML = ('Player wins!');
    } 
    else {
      console.log('Computer wins!')
      document.getElementById('total').innerHTML = ('Computer wins!');
    }
  });

    document.getElementById("scissorsPng").addEventListener("click", function() {
      console.log('Player choosed scissors');

      var computer = Math.round(Math.random() * 3);

  if (computer === 0) {
    console.log('Computer choosed rock');
    document.getElementById('winnerIs').innerHTML = ('Computer choosed rock');
  } 
  else if (computer === 1) {
    console.log('Computer choosed paper');
    document.getElementById('winnerIs').innerHTML = ('Computer choosed paper');
  } 
  else {
    console.log('Computer choosed scissors');
    document.getElementById('winnerIs').innerHTML = ('Computer choosed scissors');
  }
      
      var z = document.getElementById("scissorsPng");
      z.value = 2;

    if (z.value === computer) {
      console.log('Tie!');
      document.getElementById('total').innerHTML = ('Tie!');
    } 
    else if (z.value > 1 && computer < 1) {
      console.log('Computer wins!');
      document.getElementById('total').innerHTML = ('Computer wins!');
    } 
    else if (z.value < 1 && computer > 1) {
      console.log('Computer wins!');
      document.getElementById('total').innerHTML = ('Player wins!');
    } 
    else if (z.value > computer) {
      console.log('Player wins!');
      document.getElementById('total').innerHTML = ('Player wins!');
    } 
    else {
      console.log('Computer wins!');
      document.getElementById('total').innerHTML = ('Computer wins!');
    }
  });
}



  
