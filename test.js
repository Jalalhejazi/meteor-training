 posts = new Meteor.Collection('posts');
 kurser = new Meteor.Collection('kurser');
 elever = new Meteor.Collection('elever');


 if (Meteor.isClient) {

     Template.elever.count = function() {
         return elever.find().count();
     };

     Template.posts.count = function() {
         return posts.find().count();
     };

     Template.kurser.count = function() {
         return kurser.find().count();
     };

     Template.test01.data01 = function() {
         return " this is data01 ";
     };
     Template.test02.data02 = function() {
         return " this is data02 ";
     };
     Template.test03.data03 = function() {
         return " this is data03 ";
     };


 };


 if (Meteor.isServer) {

     if (posts.find().count() === 0) {
         posts.insert({
             title: 'new post 01 from server-side',
             adresse: 'home'
         });

         posts.insert({
             title: 'new post 02 from server-side',
             adresse: 'home'
         });
         posts.insert({
             title: 'new post 03 from server-side',
             adresse: 'home'
         });

     };

     if (kurser.find().count() === 0) {
         kurser.insert({
             title: 'new kursus 01 from server-side',
             adresse: 'KBG'
         });

         kurser.insert({
             title: 'new kursus 02 from server-side',
             adresse: 'KBG'
         });
         kurser.insert({
             title: 'new kursus 03 from server-side',
             adresse: 'KBG'
         });

     };

     if (elever.find().count() === 0) {
         elever.insert({
             navn: 'David'
         });

         elever.insert({
             navn: 'Jacob',
         });
         elever.insert({
             navn: 'Newton'
         });

     };

 };