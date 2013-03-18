Package.describe({
    summary: "Pines notify packaged for meteor."
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.use('bootstrap', 'client');
    api.add_files([
        'lib/js/jquery.pnotify.min.js',
        'lib/css/jquery.pnotify.default.css'
    ],'client');
});