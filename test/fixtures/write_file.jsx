(function(path) {
	if (!path) {
		return;
	}
	var file;
	file = new File(path);
	file.parent.create();
	file.open('w');
	file.write('test');
	file.close();
}).apply(this, [].slice.apply(this.arguments));