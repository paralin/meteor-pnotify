Package.describe({
    summary: "Beautiful and modern desktop and in-browser notifications.",
	git: "https://github.com/paralin/meteor-pnotify"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        'lib/js/jquery.pnotify.js',
        'lib/css/jquery.pnotify.default.css'
    ],'client');
    api.export('PNotify', 'client');
});
