const options = {
    margin: 0.5,
    filename: 'invoice.pdf',
    image: { 
      type: 'jpeg', 
      quality: 500
    },
    html2canvas: { 
      scale: 1 
    },
    jsPDF: { 
      unit: 'in', 
      format: 'letter', 
      orientation: 'portrait' 
    }
  }
  
  $('.buttondownload').click(function(e){
    e.preventDefault();
    const element = document.getElementById('resume');
    html2pdf().from(element).set(options).save();
  });