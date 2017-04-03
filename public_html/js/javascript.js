function letsScroll(op){
	switch(op){
		case 'datos':
			document.querySelector('.datos').scrollIntoView({ 
		        behavior: 'smooth' 
		    });
		    break;
		case 'estudios':
			document.querySelector('.estudios').scrollIntoView({ 
		        behavior: 'smooth' 
		    });
		    break;
		case 'exp':
			document.querySelector('.exp').scrollIntoView({ 
		        behavior: 'smooth' 
		    });
		    break;
		case 'otros':
			document.querySelector('.otros').scrollIntoView({ 
		        behavior: 'smooth' 
		    });
		    break;
	}
}