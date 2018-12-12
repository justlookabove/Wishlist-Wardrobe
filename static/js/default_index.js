// This is the js for the default/index.html view.

var app = function () {

    var self = {};

    Vue.config.silent = false; // show all warnings

    // Extends an array
    self.extend = function (a, b) {
        for (var i = 0; i < b.length; i++) {
            a.push(b[i]);
        }
    };

    // numbers the outfits after retrieving them from db
    var enumerate = function (v) {
        var k = 0;
        return v.map(function (e) {
            // console.log(e);
            // console.log(k);
            e._idx = k++;
        });
    };

    self.process_outfits = function () {

        enumerate(self.vue.outfits);
        self.vue.outfits.map(function (e) {
            Vue.set(e, '_show', false); 
            Vue.set(e, '_updating', false);
        });
    };

    self.get_outfits = function () {
        $.getJSON(get_outfits_url, function (response) {

            self.vue.outfits = response.outfits;
            self.process_outfits(); // added by me  

        });
    };

    self.show_this_one = function (outfit_idx) {
        //self.vue.show_home = !self.vue.show_home;

        for (var i = 0; i < self.vue.outfits.length; i++) {
            if (i == outfit_idx) {
                self.vue.outfits[i]._show = !self.vue.outfits[i]._show;
                if (self.vue.outfits[i]._show == false) {
                    self.vue.show_home = true;
                }
                else {
                    self.vue.show_home = false;
                }
            }
            else {
                self.vue.outfits[i]._show = false;
            }
        }
    };

    self.go_home = function () {
        self.vue.show_home = true;
        for (var i = 0; i < self.vue.outfits.length; i++) {
            self.vue.outfits[i]._show = false;
        }
    };

    self.start_create_outfit = function () {
        self.vue.adding_outfit = true;
    };

    self.end_create_outfit = function () {
        self.vue.adding_outfit = false;

        var new_headgear_name = self.vue.form_headgear_name;
        var new_headgear_price = self.vue.form_headgear_price;
        var new_headgear_pg_url = self.vue.form_headgear_pg_url;
        var new_headgear_img_url = self.vue.form_headgear_img_url;

        var new_top_name = self.vue.form_top_name;
        var new_top_price = self.vue.form_top_price;
        var new_top_pg_url = self.vue.form_top_pg_url;
        var new_top_img_url = self.vue.form_top_img_url;

        var new_outerwear_name = self.vue.form_outerwear_name;
        var new_outerwear_price = self.vue.form_outerwear_price;
        var new_outerwear_pg_url = self.vue.form_outerwear_pg_url;
        var new_outerwear_img_url = self.vue.form_outerwear_img_url;

        var new_bottoms_name = self.vue.form_bottoms_name;
        var new_bottoms_price = self.vue.form_bottoms_price;
        var new_bottoms_pg_url = self.vue.form_bottoms_pg_url;
        var new_bottoms_img_url = self.vue.form_bottoms_img_url;

        var new_footwear_name = self.vue.form_footwear_name;
        var new_footwear_price = self.vue.form_footwear_price;
        var new_footwear_pg_url = self.vue.form_footwear_pg_url;
        var new_footwear_img_url = self.vue.form_footwear_img_url;

        $.post(create_outfit_url,
            {
                headgear_name: new_headgear_name,
                headgear_price: new_headgear_price,
                headgear_pg_url: new_headgear_pg_url,
                headgear_img_url: new_headgear_img_url,

                top_name: new_top_name,
                top_price: new_top_price,
                top_pg_url: new_top_pg_url,
                top_img_url: new_top_img_url,

                outerwear_name: new_outerwear_name,
                outerwear_price: new_outerwear_price,
                outerwear_pg_url: new_outerwear_pg_url,
                outerwear_img_url: new_outerwear_img_url,

                bottoms_name: new_bottoms_name,
                bottoms_price: new_bottoms_price,
                bottoms_pg_url: new_bottoms_pg_url,
                bottoms_img_url: new_bottoms_img_url,

                footwear_name: new_footwear_name,
                footwear_price: new_footwear_price,
                footwear_pg_url: new_footwear_pg_url,
                footwear_img_url: new_footwear_img_url,

            },

            function (response) {

                self.vue.form_headgear_name = "";
                self.vue.form_headgear_price = "";
                self.vue.form_headgear_pg_url = "";
                self.vue.form_headgear_img_url = "";

                self.vue.form_top_name = "";
                self.vue.form_top_price = "";
                self.vue.form_top_pg_url = "";
                self.vue.form_top_img_url = "";

                self.vue.form_outerwear_name = "";
                self.vue.form_outerwear_price = "";
                self.vue.form_outerwear_pg_url = "";
                self.vue.form_outerwear_img_url = "";

                self.vue.form_bottoms_name = "";
                self.vue.form_bottoms_price = "";
                self.vue.form_bottoms_pg_url = "";
                self.vue.form_bottoms_img_url = "";

                self.vue.form_footwear_name = "";
                self.vue.form_footwear_price = "";
                self.vue.form_footwear_pg_url = "";
                self.vue.form_footwear_img_url = "";

                var new_outfit = {
                    id: response.outfit_id,

                    headgear_name: new_headgear_name,
                    headgear_price: new_headgear_price,
                    headgear_pg_url: new_headgear_pg_url,
                    headgear_img_url: new_headgear_img_url,

                    top_name: new_top_name,
                    top_price: new_top_price,
                    top_pg_url: new_top_pg_url,
                    top_img_url: new_top_img_url,

                    outerwear_name: new_outerwear_name,
                    outerwear_price: new_outerwear_price,
                    outerwear_pg_url: new_outerwear_pg_url,
                    outerwear_img_url: new_outerwear_img_url,

                    bottoms_name: new_bottoms_name,
                    bottoms_price: new_bottoms_price,
                    bottoms_pg_url: new_bottoms_pg_url,
                    bottoms_img_url: new_bottoms_img_url,

                    footwear_name: new_footwear_name,
                    footwear_price: new_footwear_price,
                    footwear_pg_url: new_footwear_pg_url,
                    footwear_img_url: new_footwear_img_url,
                };

                self.vue.outfits.push(new_outfit);
                self.process_outfits();
                self.show_this_one(self.vue.outfits.length - 1);

            }



        );

    };

    self.delete_outfit = function (outfit_idx) {
        var outfit_id = self.vue.outfits[outfit_idx].id;

        $.post(delete_outfit_url, 
            {
                outfit_id: outfit_id,
            }, 

            function(response) {
                self.vue.outfits.splice(outfit_idx, 1);
                self.process_outfits();
                self.vue.show_home = true;
            });


    };

    self.start_update_outfit = function(outfit_idx) {
        self.vue.outfits[outfit_idx]._updating = true;
    };

    self.end_update_outfit = function(outfit_idx) {
        self.vue.outfits[outfit_idx]._updating = false;

        var outfit_id = self.vue.outfits[outfit_idx].id;

        var updated_headgear_name = self.vue.outfits[outfit_idx].headgear_name;
        var updated_headgear_price = self.vue.outfits[outfit_idx].headgear_price;
        var updated_headgear_pg_url = self.vue.outfits[outfit_idx].headgear_pg_url;
        var updated_headgear_img_url = self.vue.outfits[outfit_idx].headgear_img_url;

        var updated_top_name = self.vue.outfits[outfit_idx].top_name;
        var updated_top_price = self.vue.outfits[outfit_idx].top_price;
        var updated_top_pg_url = self.vue.outfits[outfit_idx].top_pg_url;
        var updated_top_img_url = self.vue.outfits[outfit_idx].top_img_url;

        var updated_outerwear_name = self.vue.outfits[outfit_idx].outerwear_name;
        var updated_outerwear_price = self.vue.outfits[outfit_idx].outerwear_price;
        var updated_outerwear_pg_url = self.vue.outfits[outfit_idx].outerwear_pg_url;
        var updated_outerwear_img_url = self.vue.outfits[outfit_idx].outerwear_img_url;

        var updated_bottoms_name = self.vue.outfits[outfit_idx].bottoms_name;
        var updated_bottoms_price = self.vue.outfits[outfit_idx].bottoms_price;
        var updated_bottoms_pg_url = self.vue.outfits[outfit_idx].bottoms_pg_url;
        var updated_bottoms_img_url = self.vue.outfits[outfit_idx].bottoms_img_url;

        var updated_footwear_name = self.vue.outfits[outfit_idx].footwear_name;
        var updated_footwear_price = self.vue.outfits[outfit_idx].footwear_price;
        var updated_footwear_pg_url = self.vue.outfits[outfit_idx].footwear_pg_url;
        var updated_footwear_img_url = self.vue.outfits[outfit_idx].footwear_img_url;

        $.post(update_outfit_url, 
            
            {

                outfit_id: outfit_id,

                headgear_name: updated_headgear_name,
                headgear_price: updated_headgear_price,
                headgear_pg_url: updated_headgear_pg_url,
                headgear_img_url: updated_headgear_img_url,

                top_name: updated_top_name,
                top_price: updated_top_price,
                top_pg_url: updated_top_pg_url,
                top_img_url: updated_top_img_url,

                outerwear_name: updated_outerwear_name,
                outerwear_price: updated_outerwear_price,
                outerwear_pg_url: updated_outerwear_pg_url,
                outerwear_img_url: updated_outerwear_img_url,

                bottoms_name: updated_bottoms_name,
                bottoms_price: updated_bottoms_price,
                bottoms_pg_url: updated_bottoms_pg_url,
                bottoms_img_url: updated_bottoms_img_url,

                footwear_name: updated_footwear_name,
                footwear_price: updated_footwear_price,
                footwear_pg_url: updated_footwear_pg_url,
                footwear_img_url: updated_footwear_img_url,

            },

            function (response) {
                console.log('hi');


            }            
        );

    };

    // Complete as needed.
    self.vue = new Vue({
        el: "#vue-div",
        delimiters: ['${', '}'],
        unsafeDelimiters: ['!{', '}'],
        data: {
            show_home: true,
            adding_outfit: false,


            form_headgear_name: "",
            form_headgear_price: "",
            form_headgear_pg_url: "",
            form_headgear_img_url: "",

            form_top_name: "",
            form_top_price: "",
            form_top_pg_url: "",
            form_top_img_url: "",

            form_outerwear_name: "",
            form_outerwear_price: "",
            form_outerwear_pg_url: "",
            form_outerwear_img_url: "",

            form_bottoms_name: "",
            form_bottoms_price: "",
            form_bottoms_pg_url: "",
            form_bottoms_img_url: "",

            form_footwear_name: "",
            form_footwear_price: "",
            form_footwear_pg_url: "",
            form_footwear_img_url: "",

            is_logged_in: is_logged_in,

            outfits: [],
            shows: [],
        },
        methods: {
            show_this_one: self.show_this_one,
            go_home: self.go_home,
            start_create_outfit: self.start_create_outfit,
            end_create_outfit: self.end_create_outfit,
            delete_outfit: self.delete_outfit,
            start_update_outfit: self.start_update_outfit,
            end_update_outfit: self.end_update_outfit,
        }

    });

    if(is_logged_in) {
        self.get_outfits();
    }
    

    return self;
};

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function () { APP = app(); });
