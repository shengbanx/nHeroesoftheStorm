$("#jainapatchnotesModal").on('hidden.bs.modal', function (e) {
    $("#jainapatchnotesModal iframe").attr("src", $("#jainapatchnotesModal iframe").attr("src"));
});