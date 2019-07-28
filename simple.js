const fs = require('fs');


	fs.open('./simple.png', 'r', (err, fd) => {
		if(err) throw err;
		console.log(fd)
		fs.close(fd, (err) => {
			if (err) throw err;
		})
	})
