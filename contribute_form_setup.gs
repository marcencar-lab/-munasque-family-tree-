// Builds the "Help improve the Muñasque family tree" form in one run.
// How to use (about 2 minutes):
//   1. Open the form: https://docs.google.com/forms/d/1qLbq3lbWe3ee9vQUknCy9tT1U7XdOIbuQPpl_zd35Ak/edit
//   2. Click the three-dot menu (top right) -> "Script editor".
//   3. Delete whatever is in the editor, paste this whole file, click Save (disk icon).
//   4. Click "Run". The first time, Google asks you to allow the script: choose your account,
//      click "Advanced" -> "Go to Untitled project (unsafe)" -> "Allow". (It is your own script.)
//   5. Go back to the form tab and refresh: all questions are there.
//   6. Add the one question a script cannot create: click "+", choose "File upload",
//      title "Upload the photo or document", allow Image and PDF, max 10 files. Drag it into section 5.
//   7. Click "Publish" (top right), then the Send/link icon to copy the responder link.

function buildMunasqueForm() {
  var form = FormApp.openById('1qLbq3lbWe3ee9vQUknCy9tT1U7XdOIbuQPpl_zd35Ak');
  form.setTitle('Help improve the Muñasque family tree')
      .setDescription('Corrections, dates, photos, documents and stories about the descendants of Fernando Umpad Muñasque of Opon, Cebu. Everything you send is checked against the records before it goes into the tree. Nothing is shared outside the family without your permission.')
      .setCollectEmail(true)
      .setConfirmationMessage('Thank you. Everything you send is checked against the records before it goes into the tree, and the website is updated afterwards. Nothing you send is shared outside the family without your permission.');

  // Remove any existing items so the script can be run again safely.
  form.getItems().forEach(function (it) { form.deleteItem(it); });

  // Section 1 - About you
  form.addSectionHeaderItem().setTitle('About you');
  form.addTextItem().setTitle('Your name').setRequired(true);
  form.addTextItem().setTitle('How you are related to the family')
      .setHelpText('For example "granddaughter of Sulpicio Ynot Muñasque" or "married to a Cosip".').setRequired(true);
  form.addTextItem().setTitle('Best way to reach you if we have a question (email or phone)');
  form.addTextItem().setTitle('Where you live now (town and province, or country)');

  // Section 2 - What are you sending?
  form.addPageBreakItem().setTitle('What are you sending?');
  form.addMultipleChoiceItem().setTitle('What is this submission about?').setRequired(true)
      .setChoiceValues([
        'A correction to the tree (wrong name, wrong parent, missing person, wrong spelling)',
        'A date or place (birth, baptism, marriage, death, burial)',
        'A photograph',
        'A document (certificate, obituary, church record, school record, newspaper clipping)',
        'A story or memory about someone',
        'Something else']);

  // Section 3 - The person it concerns
  form.addPageBreakItem().setTitle('The person it concerns');
  form.addTextItem().setTitle('Full name of the person as it appears in the tree')
      .setHelpText('Copy it from the website if you can.').setRequired(true);
  form.addTextItem().setTitle("Their parents' names, if you know them");
  form.addTextItem().setTitle("Their spouse's name, if any");
  form.addMultipleChoiceItem().setTitle('Which branch?')
      .setChoiceValues(['Emiliano', 'Agripina (Salimbangon)', 'Andrea (Pino)', 'Marcos', 'Florintina (Etcuban)',
                        'Epifanio', 'Sotero', 'Cosmiano', 'Cruz', 'Not sure']);

  // Section 4 - Corrections and facts
  form.addPageBreakItem().setTitle('Corrections and facts');
  form.addParagraphTextItem().setTitle('What should be changed or added?')
      .setHelpText('Say exactly what is wrong now and what it should be.');
  form.addParagraphTextItem().setTitle('Dates and places you know')
      .setHelpText('Birth, marriage, death: day, month, year, town. Write "about" if you are estimating.');
  form.addCheckboxItem().setTitle('How do you know this?').setRequired(true)
      .setChoiceValues([
        'I was there / I knew the person',
        'A family member told me (say who, in the next question)',
        'I have a document (certificate, record, letter)',
        'I have a photo with names or dates written on it',
        'Family tradition, not sure of the source']);
  form.addTextItem().setTitle('If someone told you, who?')
      .setHelpText('Their name and relationship to the person.');

  // Section 5 - Photos and documents  (add the File upload question here by hand, see step 6)
  form.addPageBreakItem().setTitle('Photos and documents')
      .setHelpText('Attach the photo or document in the upload question below (JPG, PNG or PDF).');
  form.addParagraphTextItem().setTitle('Who is in the photo, left to right?');
  form.addTextItem().setTitle('When and where was it taken, and on what occasion?')
      .setHelpText('Write "about 1960" if estimating.');
  form.addMultipleChoiceItem().setTitle('Who owns the original, and may we show it on the family website?')
      .setChoiceValues([
        'Yes, show it with my name as the source',
        'Yes, show it without naming me',
        'No, use it only for research, do not publish']);

  // Section 6 - Anything else
  form.addPageBreakItem().setTitle('Anything else');
  form.addParagraphTextItem().setTitle('Stories, nicknames, occupations, migrations')
      .setHelpText('For example: "my grandfather left Opon for Lanao in 1935 because..."');
  form.addParagraphTextItem().setTitle('Do you know anyone else in the family who keeps old papers or photos?')
      .setHelpText('Names and how to reach them.');
  form.addMultipleChoiceItem().setTitle('May we contact you with follow-up questions?')
      .setChoiceValues(['Yes', 'No']);

  Logger.log('Done. Questions added to: ' + form.getEditUrl());
}
