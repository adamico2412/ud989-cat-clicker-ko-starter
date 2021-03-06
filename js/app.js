var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img\\434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.somewhere.org');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.catLevel = ko.computed(function() {
        if (this.clickCount() < 10)
            return 'Beginner';
        else if (this.clickCount() < 20)
            return 'Intermediate';
        else 
            return 'Expert';
    }, this);

};

ko.applyBindings(new ViewModel());