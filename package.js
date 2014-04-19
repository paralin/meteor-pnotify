Package.describe({
    summary: "Beautiful and modern desktop and in-browser notifications."
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        'lib/js/jquery.pnotify.js',
        'lib/css/jquery.pnotify.default.css'
    ],'client');
    if (api.export) api.export('PNotify', 'client');
});
