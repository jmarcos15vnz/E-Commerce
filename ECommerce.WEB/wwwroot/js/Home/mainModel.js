
function MainModel(model) {
    var self = this;

    function Authentication(email, pass) {
        email = self.txtEmail;
        pass = self.txtPassword;
    }

    self.txtEmail = ko.observable();
    self.txtPassword = ko.observable();

    self.OnClickLogin = function () {
        self.txtPassword = ko.observable("joao")
    }
}



















