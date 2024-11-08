function update() {
  // Store number of correct answers for each question
  var solutions = [1, 2, 3, 4, 4];
  
  var n = 5;
  var s = 0;
  
  for (var i = 1; i <= 5; i++) {
    // Find out which radio button was checked for question i
    var r = document.querySelector('input[name=q' + i + ']:checked');
    
    // Number of correct answer for question i
    var solution = solutions[i - 1];
    
    // r.value contains the number of the selected answer
    if (r && r.value == 'r' + solution) {
      // Increase number of correct answers
      s++;
      
      // Highlight the correct answer
      document.getElementById('q' + i + '_r' + solution).parentNode.style.color = '#5cb85c';
      document.getElementById('q' + i + '_r' + solution).parentNode.style.fontWeight = 'bold';
    }
  }

  // Update the progress bar
  var p = (s / n) * 100;
  
  document.getElementById("result_message").innerHTML = "You have answered " + s + " questions correctly!";
  document.getElementById("result_progress").style.width = p + "%";
  document.getElementById("result_progress").innerHTML = p + "%";
  document.getElementById("result_progress").setAttribute("aria-valuenow", p);

  // Adjust the color of the progress bar based on performance
  if (p > 60) {
    document.getElementById("result_progress").className = "progress-bar bg-success";
  } else if (p > 30) {
    document.getElementById("result_progress").className = "progress-bar bg-warning";
  } else {
    document.getElementById("result_progress").className = "progress-bar bg-danger";
  }
}