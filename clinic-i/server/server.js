Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
    console.log('email sent');
  },

  
});

//   Blaze.saveAsPDF(Template.reports, {
//   filename: "report.pdf", // optional, default is "document.pdf"
//   // data: myData, // optional, render the template with this data context
//   // x: 0, // optional, left starting position on resulting PDF, default is 4 units
//   y: 0, // optional, top starting position on resulting PDF, default is 4 units
//   orientation: "portrait", // optional, "landscape" or "portrait" (default)
//   unit: "in", // optional, unit for coordinates, one of "pt", "mm" (default), "cm", or "in"
//   format: "a4" // optional, see Page Formats, default is "a4"
// });