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
		case 'sobre':
			document.querySelector('.sobre').scrollIntoView({ 
		        behavior: 'smooth' 
		    });
		    break;
		case 'contacto':
			document.querySelector('.contacto').scrollIntoView({ 
		        behavior: 'smooth' 
		    });
		    break;
	}
}